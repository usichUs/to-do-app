package service

import (
	"context"
	"strconv"

	"github.com/federalbyro/to-do-app/backend/internal/domain/task"
)

func (s *TaskService) UpdateTask(c context.Context, input task.ToDoTask) error {
	key := input.UserID + ":" + strconv.Itoa(input.TodoID)
	_, existing := s.RedisCache.GetTaskRedis(c, key)
	if existing != nil {
		return existing
	}

	err := s.RedisCache.UpdateTaskRedis(c, input, key)
	if err != nil {
		return err
	}
	return nil
}
