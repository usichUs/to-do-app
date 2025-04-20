package redis

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"

	"github.com/federalbyro/to-do-app/backend/internal/domain/task"
	"github.com/go-redis/redis"
)

func (r *RedisRepository) GetTaskRedis(c context.Context, taskName string) (task.ToDoTask, error) {
	jsonStr, err := r.client.Get(taskName).Result()
	if err == redis.Nil {
		return task.ToDoTask{}, errors.New("task not found")
	}
	if err != nil {
		return task.ToDoTask{}, fmt.Errorf("failed to get task from redis: %w", err)
	}

	var todoTask task.ToDoTask
	if err := json.Unmarshal([]byte(jsonStr), &todoTask); err != nil {
		return task.ToDoTask{}, fmt.Errorf("failed to unmarshal task: %w", err)
	}

	return todoTask, nil
}
