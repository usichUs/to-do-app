import { Stack } from "@mantine/core";
import { Todo, TodoStatus } from "../../entities/todo/type";
import { ToDoCard } from "../ToDoCard";

type ToDoListProps = {
  todos: Todo[];
  onStatusChange?: (id: number, newStatus: TodoStatus) => void;
};

export function ToDoList({ todos, onStatusChange }: ToDoListProps) {
  return (
    <>
      <Stack align="center" justify="flex-start">
        {todos.map((el) => (
          <ToDoCard key={el.id} todo={el} onStatusChange={onStatusChange} />
        ))}
      </Stack>
    </>
  );
}
