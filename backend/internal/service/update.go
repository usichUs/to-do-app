package service

import (
	"context"
	"strconv"

	"github.com/federalbyro/to-do-app/backend/internal/domain/task"
	errservice "github.com/federalbyro/to-do-app/backend/internal/service/errors"
)

func (s *TaskService) UpdateTask(c context.Context, input task.ToDoTask) error {
	key := input.UserID + ":" + strconv.Itoa(input.TodoID)
	_, exist := s.RedisCache.GetTaskRedis(c, key)

	if exist != nil {
		return errservice.ErrNotExist
	}

	err := s.RedisCache.UpdateTaskRedis(c, input, key)
	if err != nil {
		return err
	}
	return nil
}
