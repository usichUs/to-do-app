import {
  Button,
  Modal,
  Select,
  Stack,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Todo, TodoCategory, TodoPriority } from "../../entities/todo/type";
import { useState } from "react";
import { createToDo } from ".";

type CreateToDoFormProps = {
  onAdd: (todo: Todo) => void;
};

export function CreateToDoForm({ onAdd }: CreateToDoFormProps) {
  const [opened, { open, close }] = useDisclosure(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<TodoCategory | null>(null);
  const [priority, setPriority] = useState<TodoPriority | null>(null);
  const [description, setDescription] = useState<string>("");

  const resetForm = () => {
    setTitle("");
    setCategory(null);
    setPriority(null);
    setDescription("");
  };

  const handleSubmit = () => {
    if (!title || !category || !priority) {
      return;
    }

    const newTodo = createToDo({ title, category, priority, description });
    onAdd(newTodo);
    close();
    resetForm();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Todo">
        <Stack>
          <TextInput
            label="Title"
            placeholder="Title"
            required
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
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
          <Button onClick={handleSubmit}>Create Todo</Button>
        </Stack>
      </Modal>
      <Button fullWidth onClick={open}>
        Create ToDo
      </Button>
    </>
  );
}
