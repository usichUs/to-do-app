package cache

import (
	"fmt"
	"log"
	"time"

	cfg "github.com/federalbyro/to-do-app/backend/internal/pkg/configs"
	"github.com/go-redis/redis"
)

func NewRedisClient(cfg *cfg.Config) *redis.Client {
	client := redis.NewClient(&redis.Options{
		Addr:        fmt.Sprintf("localhost:%d", cfg.Redis.Port),
		Password:    cfg.Redis.Password,
		DB:          cfg.Redis.DB,
		PoolSize:    cfg.Redis.PoolSize,
		MaxRetries:  cfg.Redis.MaxRetries,
		DialTimeout: time.Duration(cfg.Redis.DialTimeout) * time.Second,
	})

	_, err := client.Ping().Result()
	if err != nil {
		log.Printf("Error connecting to Redis: %v", err)
		return nil
	}

	log.Print(": [LOG] : Redis is up")
	return client
}
