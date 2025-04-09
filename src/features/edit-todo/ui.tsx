import {
  Button,
  Modal,
  Select,
  Stack,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import {
  Todo,
  TodoCategory,
  TodoPriority,
  TodoStatus,
} from "../../entities/todo/type";
import { editTodo } from ".";

type EditToDoFormProps = {
  onEdit: (todo: Todo) => void;
  todoList: Todo[];
  todo: Todo;
};

export function EditToDoForm({ onEdit, todoList, todo }: EditToDoFormProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<TodoCategory | null>(null);
  const [priority, setPriority] = useState<TodoPriority | null>(null);
  const [status, setStatus] = useState<TodoStatus | null>(null);
  const [description, setDescription] = useState<string>("");
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    setTitle(todo.title);
    setCategory(todo.category);
    setPriority(todo.priority);
    setStatus(todo.status);
    setDescription(todo.description || "");
  }, [todo]);

  const handleSubmit = () => {
    if (!title || !category || !priority || !status) {
      return;
    }

    const updatedTodo = {
      ...todo,
      title,
      category,
      priority,
      status,
      description,
    };

    const updatedTodoList = editTodo({ todoList, updatedTodo });
    const editedTodo = updatedTodoList.find((el) => el.id === todo.id);
    if (editedTodo) {
      onEdit(editedTodo);
    }
    close();
  };
  return (
    <>
      <Modal opened={opened} onClose={close} title="Edit Todo">
        <Stack>
          <TextInput
            label="Title"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
          <Select
            label="Status"
            placeholder="Status"
            required
            data={Object.values(TodoStatus)}
            value={status}
            onChange={(value) => setStatus(value as TodoStatus)}
          />
          <Select
            label="Category"
            placeholder="Category"
            data={Object.values(TodoCategory)}
            required
            value={category}
            onChange={(value) => setCategory(value as TodoCategory)}
          />
          <Select
            label="Priority"
            placeholder="Priority"
            data={Object.values(TodoPriority)}
            required
            value={priority}
            onChange={(value) => setPriority(value as TodoPriority)}
          />
          <Textarea
            label="Description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
          />
          <Button onClick={handleSubmit}>Edit Todo</Button>
        </Stack>
      </Modal>
      <IconEdit stroke={1} onClick={open} />
    </>
  );
}
