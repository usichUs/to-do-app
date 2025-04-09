import {
  Badge,
  Button,
  Card,
  Group,
  Popover,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Todo } from "../../entities/todo/type";
import { PRIORITY_COLOR, STATUS_COLOR } from "./config";
import { EditToDoForm } from "../../features/edit-todo";

type ToDoCardProps = {
  todo: Todo;
  todoList: Todo[];
  onEdit: (updatedTodo: Todo) => void;
};

export function ToDoCard({ todo, todoList, onEdit }: ToDoCardProps) {
  return (
    <Card
      withBorder
      shadow="sm"
      p="md"
      w="350px"
      style={{
        borderLeft: `6px solid ${STATUS_COLOR[todo.status]}`,
        position: "relative",
      }}
    >
      <Stack gap="md" align="flex-start">
        <Group w="100%" justify="space-between">
          <Text opacity=".7" c="dimmed" tt="uppercase" fw={500} fz="xs">
            {todo.category}
          </Text>
          <EditToDoForm onEdit={onEdit} todoList={todoList} todo={todo} />
        </Group>

        <Group gap="xs">
          <Badge
            color={PRIORITY_COLOR[todo.priority]}
            size="lg"
            variant="light"
            style={{ cursor: "pointer" }}
          >
            {todo.priority}
          </Badge>

          <Badge
            color={STATUS_COLOR[todo.status]}
            size="lg"
            variant="light"
            style={{ cursor: "pointer" }}
          >
            {todo.status}
          </Badge>
        </Group>

        <Title order={3} lineClamp={2}>
          {todo.title}
        </Title>

        {todo.description && (
          <Popover width={200} position="bottom" withArrow shadow="md">
            <Popover.Target>
              <Button
                variant="outline"
                color={STATUS_COLOR[todo.status]}
                fullWidth
              >
                Description
              </Button>
            </Popover.Target>
            <Popover.Dropdown>
              <Text size="sm">{todo.description}</Text>
            </Popover.Dropdown>
          </Popover>
        )}
      </Stack>
    </Card>
  );
}
