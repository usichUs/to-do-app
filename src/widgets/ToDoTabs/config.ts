import { TodoStatus } from "../../entities/todo/type";

export const tabsConfig = [
  { label: "All", value: "all", status: undefined },
  {
    label: "Completed",
    value: "completed",
    status: [TodoStatus.COMPLETED, TodoStatus.CANCELLED],
  },
  {
    label: "Active",
    value: "active",
    status: [TodoStatus.IN_PROGRESS, TodoStatus.ON_HOLD],
  },
  {
    label: "Not Started",
    value: "notStarted",
    status: [TodoStatus.NOT_STARTED],
  },
];
