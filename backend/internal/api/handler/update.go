package handler

import (
	"log"
	"net/http"

	"github.com/federalbyro/to-do-app/backend/internal/api/validation"
	"github.com/federalbyro/to-do-app/backend/internal/domain/task"
	"github.com/gin-gonic/gin"
)

func (h *TaskHandler) Update(c *gin.Context) {
	var input task.ToDoTask

	if err := c.ShouldBindBodyWithJSON(&input); err != nil {
		log.Printf(": [LOG] : Error binding JSON in Update: %v", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid input", "details": err.Error()})
		return
	}
	if err := validation.NormalTask(&input); err != nil {
		log.Printf(": [LOG] : Validation error in Update: %v", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	err := h.ServiceTask.UpdateTask(c.Request.Context(), input)

	if err != nil {
		log.Printf("Error accepting task: %v", err)
		return
	}

	c.JSON(http.StatusCreated, gin.H{"status": "created"})
}
