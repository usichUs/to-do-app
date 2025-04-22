package redis

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/federalbyro/to-do-app/backend/internal/domain/task"
)

func (r *RedisRepository) GetTaskRedis(c context.Context, taskName string) (*task.ToDoTask, error) {
	jsonStr, err := r.client.Get(taskName).Result()
	if err != nil {
		return nil, fmt.Errorf("failed to get task from redis: %w", err)
	}
	var todoTask task.ToDoTask
	if err := json.Unmarshal([]byte(jsonStr), &todoTask); err != nil {
		return nil, fmt.Errorf("failed to unmarshal task: %w", err)
	}

	return &todoTask, nil
}
