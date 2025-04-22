package service

import (
	"context"

	"github.com/federalbyro/to-do-app/backend/internal/domain/task"
)

func (s *TaskService) GetTask(c context.Context, user_id string, id string) (*task.ToDoTask, error) {
	key := user_id + ":" + id
	task, err := s.RedisCache.GetTaskRedis(c, key)
	return task, err
}
