package validation

import (
	"errors"
	"reflect"
	"strings"

	"github.com/federalbyro/to-do-app/backend/internal/domain/category"
	"github.com/federalbyro/to-do-app/backend/internal/domain/priority"
	"github.com/federalbyro/to-do-app/backend/internal/domain/status"
	"github.com/federalbyro/to-do-app/backend/internal/domain/task"
)

var (
	ErrInvalidInt = errors.New("value must be greater than zero")
	ErrManySpace  = errors.New("field is empty")
	ErrNotType    = errors.New("type is missing")
)

func ValidInt(some int) error {
	if some <= 0 {
		return ErrInvalidInt
	}
	return nil
}

func ValidStr(some string) error {
	if strings.TrimSpace(some) == "" {
		return ErrManySpace
	}
	return nil
}

func ValidateInMap[K comparable, V any](value K, validValuesMap map[K]V) error {
	if _, exists := validValuesMap[value]; !exists {
		return ErrNotType
	}
	return nil
}

func NormalTask(example *task.ToDoTask) error {
	if err := ValidInt(example.TodoID); err != nil {
		return err
	}
	if err := ValidateInMap(category.TodoCategory(example.Category), category.ExistCategory); err != nil {
		return err
	}
	if err := ValidateInMap(priority.TodoPriority(example.Priority), priority.ExistPriority); err != nil {
		return err
	}
	if err := ValidateInMap(status.TodoStatus(example.Status), status.ExistStatuses); err != nil {
		return err
	}
	return validateStringFields(example)
}

func validateStringFields(example *task.ToDoTask) error {
	v := reflect.ValueOf(*example)

	for i := 0; i < v.NumField(); i++ {
		field := v.Field(i)
		if field.Kind() != reflect.String {
			continue
		}
		if err := ValidStr(field.String()); err != nil {
			return err
		}
	}
	return nil
}
