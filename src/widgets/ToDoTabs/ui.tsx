import { Tabs, Text, Title } from "@mantine/core";
import { ToDoList } from "../ToDoList";
import { tabsConfig } from "./config";
import { useMemo, useState } from "react";
import { filterTodos } from "../../shared/utils/filterTodos";
import { countTodos } from "../../shared/utils/countTodos";
import { Todo } from "../../entities/todo/type";

type ToDoTabsProps = {
  todoList: Todo[];
  onEdit: (updatedTodo: Todo) => void;
};

export function ToDoTabs({ todoList, onEdit }: ToDoTabsProps) {
  const [activeTab, setActiveTab] = useState<string | null>("all");
  const selectedTab = tabsConfig.find((tab) => tab.value === activeTab);

  const filteredTodos = useMemo(
    () =>
      filterTodos({
        todosList: todoList,
        todoStatus: selectedTab?.status,
      }),
    [todoList, selectedTab?.status]
  );

  const countedTodos = useMemo(
    () =>
      countTodos({
        todosList: todoList,
        todoStatus: selectedTab?.status,
      }),
    [todoList, selectedTab?.status]
  );

  return (
    <Tabs value={activeTab} onChange={setActiveTab} w="100%">
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
              {countedTodos} / {todoList.length}
            </Title>
          )}
          <ToDoList todoList={filteredTodos} onEdit={onEdit} />
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}
