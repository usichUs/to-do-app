package redis

import (
	"context"
	"errors"
	"log"
)

func (r *RedisRepository) DeleteTaskRedis(c context.Context, taskName string) error {
	result, err := r.client.Del(taskName).Result()
	if err != nil {
		log.Printf("failed to delete task %s from redis: %v", taskName, err)
		return err
	}
	if result == 0 {
		return errors.New("task not found")
	}

	return nil
}
