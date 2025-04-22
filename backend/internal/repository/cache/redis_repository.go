package redis

import (
	"context"

	"github.com/federalbyro/to-do-app/backend/internal/domain/task"
	"github.com/go-redis/redis"
)

type RedisServerRepository interface {
	GetTaskRedis(ctx context.Context, key string) (*task.ToDoTask, error)
	CreateTaskRedis(ctx context.Context, task task.ToDoTask, key string) error
	UpdateTaskRedis(ctx context.Context, task task.ToDoTask, key string) error
	DeleteTaskRedis(ctx context.Context, key string) error
}

type RedisRepository struct {
	client *redis.Client
}

func NewRedisRepository(client *redis.Client) *RedisRepository {
	return &RedisRepository{client: client}
}
