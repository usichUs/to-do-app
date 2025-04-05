export enum TodoCategory {
  WORK = "Work",
  PERSONAL = "Personal",
  SHOPPING = "Shopping",
  HOME = "Home/Chores",
  OTHER = "Other",
}

export enum TodoPriority {
  HIGH = "High",
  MEDIUM = "Medium",
  LOW = "Low",
  NONE = "None",
}

export enum TodoStatus {
  NOT_STARTED = "Not Started",
  IN_PROGRESS = "In Progress",
  COMPLETED = "Completed",
  ON_HOLD = "On Hold",
  CANCELLED = "Cancelled",
}

export type Todo = {
  id: number;
  title: string;
  description?: string;
  category: TodoCategory;
  priority: TodoPriority;
  status: TodoStatus;
};
