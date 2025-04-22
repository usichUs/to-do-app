package service

import (
	"context"
	"strconv"

	"github.com/federalbyro/to-do-app/backend/internal/domain/task"
	errservice "github.com/federalbyro/to-do-app/backend/internal/service/errors"
)

func (s *TaskService) CreateTask(c context.Context, input task.ToDoTask) error {
	key := input.UserID + ":" + strconv.Itoa(input.TodoID)
	_, exist := s.RedisCache.GetTaskRedis(c, key)

	if exist == nil {
		return errservice.ErrExistBase
	}
	err := s.RedisCache.CreateTaskRedis(c, input, key)

	if err != nil {
		return err
	}
	return nil
}
