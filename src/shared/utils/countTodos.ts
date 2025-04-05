import { Todo, TodoStatus } from "../../entities/todo/type";
import { filterTodos } from "./filterTodos";

type countTodosProps = {
  todosList: Todo[];
  todoStatus?: TodoStatus[];
};

export function countTodos({ todosList, todoStatus }: countTodosProps) {
  return filterTodos({ todosList, todoStatus }).length;
}
