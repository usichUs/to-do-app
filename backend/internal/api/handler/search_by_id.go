package handler

import (
	"errors"
	"net/http"
	"strconv"

	"github.com/federalbyro/to-do-app/backend/internal/api/validation"
	"github.com/gin-gonic/gin"
)

var ErrNotFound = errors.New("task not found")

func (task_handler *TaskHandler) GetByTaskId(c *gin.Context) {
	id := c.Param("id")
	idStr, _ := strconv.Atoi(id)
	if err := validation.ValidInt(idStr); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request body"})
		return
	}

	userid := c.Query("user_id")
	if userid == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user_id is required"})
		return
	}

	task, err := task_handler.ServiceTask.GetTask(c.Request.Context(), userid, id)

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "task not found"})
		return
	}
	c.JSON(http.StatusOK, task)
}
