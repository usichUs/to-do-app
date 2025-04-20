package redis

import (
	"context"
	"encoding/json"
	"log"

	"github.com/federalbyro/to-do-app/backend/internal/domain/task"
)

func (r *RedisRepository) CreateTaskRedis(c context.Context, input task.ToDoTask, key string) error {

	taskJSON, err := json.Marshal(input)
	if err != nil {
		log.Printf("Failed to marshal task: %v", err)
		return err
	}

	if err := r.client.Set(key, taskJSON, 0).Err(); err != nil {
		log.Printf("Failed to set task in Redis: %v", err)
		return err
	}

	return nil
}
