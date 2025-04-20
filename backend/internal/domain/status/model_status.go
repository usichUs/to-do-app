package status

type TodoStatus string

const (
	NotStarted TodoStatus = "Not Started"
	InProgress TodoStatus = "In Progress"
	Completed  TodoStatus = "Completed"
	OnHold     TodoStatus = "On Hold"
	Cancelled  TodoStatus = "Cancelled"
)

var ExistStatuses = map[TodoStatus]struct{}{
	NotStarted: struct{}{},
	InProgress: struct{}{},
	Completed:  struct{}{},
	OnHold:     struct{}{},
	Cancelled:  struct{}{},
}
