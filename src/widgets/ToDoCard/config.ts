import { TodoPriority, TodoStatus } from "../../entities/todo/type";

export const STATUS_COLOR = {
  [TodoStatus.NOT_STARTED]: "#9CA3AF",
  [TodoStatus.IN_PROGRESS]: "#3B82F6",
  [TodoStatus.COMPLETED]: "#10B981",
  [TodoStatus.ON_HOLD]: "#F59E0B",
  [TodoStatus.CANCELLED]: "#EF4444",
} as const;

export const PRIORITY_COLOR = {
  [TodoPriority.HIGH]: "#EF4444",
  [TodoPriority.MEDIUM]: "#F59E0B",
  [TodoPriority.LOW]: "#10B981",
  [TodoPriority.NONE]: "#9CA3AF",
} as const;
