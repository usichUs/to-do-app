package task

import (
	"github.com/federalbyro/to-do-app/backend/internal/domain/category"

	"github.com/federalbyro/to-do-app/backend/internal/domain/priority"

	"github.com/federalbyro/to-do-app/backend/internal/domain/status"
)

type ToDoTask struct {
	UserID      string                `json:"user_id"`
	TodoID      int                   `json:"id"`
	Title       string                `json:"title"`
	Description string                `json:"description"`
	Category    category.TodoCategory `json:"TodoCategory"`
	Priority    priority.TodoPriority `json:"TodoPriority"`
	Status      status.TodoStatus     `json:"TodoStatus"`
}
