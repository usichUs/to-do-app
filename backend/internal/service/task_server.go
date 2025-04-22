package service

import (
	"context"

	"github.com/federalbyro/to-do-app/backend/internal/domain/task"
	redis "github.com/federalbyro/to-do-app/backend/internal/repository/cache"
)

type TaskServerService interface {
	GetTask(ctx context.Context, userID string, taskID string) (*task.ToDoTask, error)
	CreateTask(ctx context.Context, task task.ToDoTask) error
	UpdateTask(ctx context.Context, task task.ToDoTask) error
	DeleteTask(ctx context.Context, userID string, taskID string) error
}

type TaskService struct {
	RedisCache redis.RedisServerRepository
}

func NewTaskService(redisCache redis.RedisServerRepository) *TaskService {
	return &TaskService{redisCache}
}
