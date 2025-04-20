package main

import (
	"log"

	"github.com/federalbyro/to-do-app/backend/internal/api/handler"
	"github.com/federalbyro/to-do-app/backend/internal/api/server"
	"github.com/federalbyro/to-do-app/backend/internal/pkg/cache"
	cfg "github.com/federalbyro/to-do-app/backend/internal/pkg/configs"
	redis "github.com/federalbyro/to-do-app/backend/internal/repository/cache"
	"github.com/federalbyro/to-do-app/backend/internal/service"
)

func main() {
	initialConfig, _ := cfg.Load()

	redisClient := cache.NewRedisClient(initialConfig)
	defer redisClient.Close()

	serverRedis := redis.NewRedisRepository(redisClient)
	serverService := service.NewTaskService(serverRedis)
	serverHandler := handler.NewTaskHandler(serverService)
	err := server.Run(serverHandler, initialConfig)
	if err != nil {
		log.Printf("Error Server")
	}
}
