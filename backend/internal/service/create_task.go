package service

import (
	"context"
	"strconv"

	"github.com/federalbyro/to-do-app/backend/internal/domain/task"
)

func (s *TaskService) CreateTask(c context.Context, input task.ToDoTask) error {
	key := input.UserID + ":" + strconv.Itoa(input.TodoID)
	err := s.RedisCache.CreateTaskRedis(c, input, key)
	if err != nil {
		return err
	}
	return nil
}
