.PHONY: run all up down build

run:
	@echo "Running server locally"
	go run ./cmd/main.go

up:
	@echo "Starting Docker containers"
	docker-compose up -d

down:
	@echo "Stopping Docker containers"
	docker-compose down

build:
	@echo "Building Docker image"
	docker-compose build

all: up run
