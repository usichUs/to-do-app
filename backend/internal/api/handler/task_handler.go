package handler

import (
	"github.com/federalbyro/to-do-app/backend/internal/service"
	"github.com/gin-gonic/gin"
)

type TaskServerHandler interface {
	GetByTaskId(c *gin.Context)
	CreateNewTask(c *gin.Context)
	Update(c *gin.Context)
	DeleteTask(c *gin.Context)
}

type TaskHandler struct {
	ServiceTask service.TaskServerService
}

func NewTaskHandler(ServiceTask service.TaskServerService) *TaskHandler {
	return &TaskHandler{
		ServiceTask: ServiceTask,
	}
}
