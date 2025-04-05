import {
  Todo,
  TodoCategory,
  TodoPriority,
  TodoStatus,
} from "../entities/todo/type";

const todo: Todo = {
  id: 1,
  title: "Test Todo",
  description:
    "lorem ipsum blah blah bleh bleh blew lorem ipsum blah blah bleh bleh blew lorem ipsum blah blah bleh bleh blew",
  category: TodoCategory.HOME,
  priority: TodoPriority.HIGH,
  status: TodoStatus.IN_PROGRESS,
};

const todo_1: Todo = {
  id: 2,
  title: "Test_1 Todo",
  description:
    "Gege pep npm run dev i dont know what to do bleh bleh blew lorem ipsum blah blah bleh bleh blew",
  category: TodoCategory.PERSONAL,
  priority: TodoPriority.LOW,
  status: TodoStatus.ON_HOLD,
};

export const testList: Todo[] = [todo, todo_1];

export const STATUS_COLOR = {
  [TodoStatus.NOT_STARTED]: "#9CA3AF",
  [TodoStatus.IN_PROGRESS]: "#3B82F6",
  [TodoStatus.COMPLETED]: "#10B981",
  [TodoStatus.ON_HOLD]: "#F59E0B",
  [TodoStatus.CANCELLED]: "#EF4444",
} as const;
