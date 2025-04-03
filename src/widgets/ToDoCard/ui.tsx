import {
  Badge,
  Box,
  Button,
  Collapse,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import styles from "./ui.module.css";
import { Todo, TodoCategory, TodoPriority } from "../../entities/todo/type";
import { useDisclosure } from "@mantine/hooks";

const todo: Todo = {
  title: "Test Todo",
  description:
    "lorem ipsum blah blah bleh bleh blew lorem ipsum blah blah bleh bleh blew lorem ipsum blah blah bleh bleh blew",
  category: TodoCategory.HOME,
  priority: TodoPriority.HIGH,
};

export function ToDoCard() {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Stack
      align="flex-start"
      justify="space-around"
      gap="md"
      className={styles.stack}
    >
      <Text>{todo.category}</Text>
      <Badge>{todo.priority}</Badge>
      <Title>{todo.title}</Title>
      <Box maw={400} mx="auto">
        <Group justify="center" mb={5}>
          <Button onClick={toggle}>Toggle content</Button>
        </Group>

        <Collapse in={opened}>
          <Text>{todo.description}</Text>
        </Collapse>
      </Box>
    </Stack>
  );
}
