import { Stack } from "@mantine/core";
import { Todo } from "../../entities/todo/type";
import { ToDoCard } from "../ToDoCard";

type ToDoListProps = {
  todos: Todo[];
};

export function ToDoList({ todos }: ToDoListProps) {
  return (
    <>
      <Stack align="center" justify="flex-start">
        {todos.map((el) => (
          <ToDoCard key={el.id} todo={el} />
        ))}
      </Stack>
    </>
  );
}
