import { Todo } from "../../entities/todo/type";

type editTodoProps = {
  todoList: Todo[];
  updatedTodo: Todo;
};

export function editTodo({ todoList, updatedTodo }: editTodoProps) {
  return todoList.map((todo) =>
    todo.id === updatedTodo.id ? updatedTodo : todo
  );
}
