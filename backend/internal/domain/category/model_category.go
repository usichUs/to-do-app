package category

type TodoCategory string

const (
	Work     TodoCategory = "Work"
	Personal TodoCategory = "Personal"
	Shopping TodoCategory = "Shopping"
	Home     TodoCategory = "Home/Chores"
	Other    TodoCategory = "Other"
)

var ExistCategory = map[TodoCategory]struct{}{
	Work:     struct{}{},
	Personal: struct{}{},
	Shopping: struct{}{},
	Home:     struct{}{},
	Other:    struct{}{},
}
