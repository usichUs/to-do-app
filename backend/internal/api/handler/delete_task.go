package handler

import (
	"errors"
	"net/http"
	"strconv"

	"github.com/federalbyro/to-do-app/backend/internal/api/validation"
	"github.com/gin-gonic/gin"
)

func (h *TaskHandler) DeleteTask(c *gin.Context) {
	id := c.Param("id")
	idstr, _ := strconv.Atoi(id)
	if err := validation.ValidInt(idstr); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "invalid request body"})
		return
	}

	userid := c.Query("user_id")
	if userid == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "user_id is required"})
		return
	}

	err := h.ServiceTask.DeleteTask(c.Request.Context(), userid, id)

	if err != nil {
		if errors.Is(err, ErrNotFound) {
			c.JSON(http.StatusNotFound, gin.H{"error": "task not found"})
			return
		}
		c.JSON(http.StatusInternalServerError, gin.H{"error": "internal server error"})
		return
	}
	c.JSON(http.StatusOK, gin.H{})
}
