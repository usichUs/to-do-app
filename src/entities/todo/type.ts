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

export type Todo = {
  title: string;
  description?: string;
  category: TodoCategory;
  priority: TodoPriority;
};
