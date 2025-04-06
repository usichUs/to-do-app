import { Todo, TodoStatus } from "../../entities/todo/type";

let idCounter = 3;

export function createToDo(todoData: Omit<Todo, "id" | "status">) {
  return {
    ...todoData,
    status: TodoStatus.NOT_STARTED,
    id: idCounter++,
  };
}
