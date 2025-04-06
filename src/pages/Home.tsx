import { Container, Flex } from "@mantine/core";
import { ToDoTabs } from "../widgets/ToDoTabs";
import { testList } from "./config";
import { CreateToDoForm } from "../features/create-todo";
import { useState } from "react";
import { Todo, TodoStatus } from "../entities/todo/type";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>(testList);
  const handleAddTodo = (todo: Todo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  const handleStatusChange = (id: number, newStatus: TodoStatus) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, status: newStatus } : todo
      )
    );
  };

  return (
    <Container mt="lg">
      <Flex align="center" justify="flex-start" direction="column" gap="lg">
        <CreateToDoForm onAdd={handleAddTodo} />
        <ToDoTabs todos={todos} onStatusChange={handleStatusChange}></ToDoTabs>
      </Flex>
    </Container>
  );
}
