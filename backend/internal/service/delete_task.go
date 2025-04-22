package service

import (
	"context"

	errservice "github.com/federalbyro/to-do-app/backend/internal/service/errors"
)

func (s *TaskService) DeleteTask(c context.Context, user_id, id string) error {
	key := user_id + ":" + id
	_, exist := s.RedisCache.GetTaskRedis(c, key)

	if exist != nil {
		return errservice.ErrExistBase
	}

	err := s.RedisCache.DeleteTaskRedis(c, key)
	return err
}
