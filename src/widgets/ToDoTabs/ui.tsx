import { Tabs, Text, Title } from "@mantine/core";
import { ToDoList } from "../ToDoList";
import { tabsConfig } from "./config";
import { useMemo, useState } from "react";
import { filterTodos } from "../../shared/utils/filterTodos";
import { countTodos } from "../../shared/utils/countTodos";
import { Todo } from "../../entities/todo/type";

type ToDoTabsProps = {
  todos: Todo[];
  onStatusChange: (id: number, newStatus: Todo["status"]) => void;
};

export function ToDoTabs({ todos, onStatusChange }: ToDoTabsProps) {
  const [activeTab, setActiveTab] = useState<string | null>("all");
  const selectedTab = tabsConfig.find((tab) => tab.value === activeTab);

  const filteredTodos = useMemo(
    () =>
      filterTodos({
        todosList: todos,
        todoStatus: selectedTab?.status,
      }),
    [todos, selectedTab?.status]
  );

  const countedTodos = useMemo(
    () =>
      countTodos({
        todosList: todos,
        todoStatus: selectedTab?.status,
      }),
    [todos, selectedTab?.status]
  );

  return (
    <Tabs value={activeTab} onChange={setActiveTab}>
      <Tabs.List grow>
        {tabsConfig.map((tab) => (
          <Tabs.Tab key={tab.value} value={tab.value}>
            <Text size="sm">{tab.label}</Text>
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {tabsConfig.map((tab) => (
        <Tabs.Panel key={tab.value} value={tab.value} pt="xs">
          {tab.value !== "all" && (
            <Title order={3} ta="center">
              {countedTodos} / {todos.length}
            </Title>
          )}
          <ToDoList todos={filteredTodos} onStatusChange={onStatusChange} />
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}
