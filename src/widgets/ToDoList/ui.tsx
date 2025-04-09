import { Stack } from "@mantine/core";
import { Todo } from "../../entities/todo/type";
import { ToDoCard } from "../ToDoCard";

type ToDoListProps = {
  todoList: Todo[];
  onEdit: (updatedTodo: Todo) => void;
};

export function ToDoList({ todoList, onEdit }: ToDoListProps) {
  return (
    <>
      <Stack align="center" justify="flex-start">
        {todoList.map((el) => (
          <ToDoCard key={el.id} todo={el} todoList={todoList} onEdit={onEdit} />
        ))}
      </Stack>
    </>
  );
}
