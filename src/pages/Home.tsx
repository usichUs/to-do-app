import { Container, Flex } from "@mantine/core";
import { ToDoTabs } from "../widgets/ToDoTabs";
import { testList } from "./config";
import { CreateToDoForm } from "../features/create-todo";
import { useState } from "react";
import { Todo } from "../entities/todo/type";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>(testList);
  const handleAddTodo = (todo: Todo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  const handleEditTodo = (updatedTodo: Todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  return (
    <Container mt="lg">
      <Flex align="center" justify="flex-start" direction="column" gap="lg">
        <CreateToDoForm onAdd={handleAddTodo} />
        <ToDoTabs todoList={todos} onEdit={handleEditTodo}></ToDoTabs>
      </Flex>
    </Container>
  );
}
