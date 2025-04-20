package priority

type TodoPriority string

const (
	High   TodoPriority = "High"
	Medium TodoPriority = "Medium"
	Low    TodoPriority = "Low"
	None   TodoPriority = "None"
)

var ExistPriority = map[TodoPriority]struct{}{
	High:   struct{}{},
	Medium: struct{}{},
	Low:    struct{}{},
	None:   struct{}{},
}
