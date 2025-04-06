import {
  Badge,
  Button,
  Card,
  Group,
  HoverCard,
  Popover,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Todo, TodoStatus } from "../../entities/todo/type";
import { PRIORITY_COLOR, STATUS_COLOR } from "./config";

type ToDoCardProps = {
  todo: Todo;
  onStatusChange?: (id: number, newStatus: TodoStatus) => void;
};

export function ToDoCard({ todo, onStatusChange }: ToDoCardProps) {
  const handleChangeStatus = (value: TodoStatus) => {
    if (onStatusChange) {
      onStatusChange(todo.id, value);
    }
  };

  const handleClickStatusBadge = () => {
    const nextStatus = getNextStatus(todo.status);
    handleChangeStatus(nextStatus);
  };

  const getNextStatus = (currentStatus: TodoStatus): TodoStatus => {
    switch (currentStatus) {
      case TodoStatus.NOT_STARTED:
        return TodoStatus.IN_PROGRESS;
      case TodoStatus.IN_PROGRESS:
        return TodoStatus.COMPLETED;
      case TodoStatus.COMPLETED:
        return TodoStatus.CANCELLED;
      case TodoStatus.CANCELLED:
        return TodoStatus.ON_HOLD;
      default:
        return TodoStatus.NOT_STARTED;
    }
  };

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
        <Text opacity=".7" c="dimmed" tt="uppercase" fw={500} fz="xs">
          {todo.category}
        </Text>

        <Group gap="xs">
          <Badge
            color={PRIORITY_COLOR[todo.priority]}
            size="lg"
            variant="light"
            style={{ cursor: "pointer" }}
          >
            {todo.priority}
          </Badge>

          <HoverCard
            openDelay={1000}
            shadow="4px 4px 8px 5px rgba(34, 60, 80, 0.34)"
          >
            <HoverCard.Target>
              <Badge
                color={STATUS_COLOR[todo.status]}
                size="lg"
                variant="light"
                onClick={handleClickStatusBadge}
                style={{ cursor: "pointer" }}
              >
                {todo.status}
              </Badge>
            </HoverCard.Target>
            <HoverCard.Dropdown>
              <Text>Click to change Status</Text>
            </HoverCard.Dropdown>
          </HoverCard>
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
