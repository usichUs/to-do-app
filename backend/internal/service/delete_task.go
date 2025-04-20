package service

import "context"

func (s *TaskService) DeleteTask(c context.Context, user_id, id string) error {
	key := user_id + ":" + id
	err := s.RedisCache.DeleteTaskRedis(c, key)
	return err
}
