import { Todo, TodoStatus } from "../../entities/todo/type";

type filterTodosProps = {
  todosList: Todo[];
  todoStatus?: TodoStatus[];
};

export function filterTodos({ todosList, todoStatus }: filterTodosProps) {
  return todoStatus
    ? todosList.filter((el) => todoStatus.includes(el.status))
    : todosList;
}
