package server

import (
	"context"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/federalbyro/to-do-app/backend/internal/api/handler"

	cfg "github.com/federalbyro/to-do-app/backend/internal/pkg/configs"
	"github.com/gin-gonic/gin"
)

func NewRouter(handlers handler.TaskServerHandler) *gin.Engine {
	router := gin.Default()

	task := router.Group("/todos")
	{
		task.GET("/:id", handlers.GetByTaskId)
		task.POST("/", handlers.CreateNewTask)
		task.DELETE("/:id", handlers.DeleteTask)
		task.PUT("/:id", handlers.Update)
	}
	return router
}

func Run(handlers handler.TaskServerHandler, cfg *cfg.Config) error {
	router := NewRouter(handlers)

	server := &http.Server{
		Addr:    string(":") + cfg.ServerPort,
		Handler: router,
	}

	go func() {
		log.Printf("Starting HTTPS server on port %v", cfg.ServerPort)
		if err := server.ListenAndServeTLS("server.crt", "server.key"); err != nil && err != http.ErrServerClosed {
			log.Printf("Failed to start HTTPS server: %v", err)
		}
	}()

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt, syscall.SIGTERM)
	<-quit
	log.Println("Shutting down server...")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := server.Shutdown(ctx); err != nil {
		log.Printf("Server shutdown failed: %v", err)
		return err
	}

	log.Println("Server stopped")
	return nil
}
