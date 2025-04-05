import { Container, Flex } from "@mantine/core";
import { ToDoTabs } from "../widgets/ToDoTabs";
import { testList } from "./config";

export default function Home() {
  return (
    <Container fluid mt="lg">
      <Flex justify="center" align="flex-start" direction="row">
        <ToDoTabs todos={testList}></ToDoTabs>
      </Flex>
    </Container>
  );
}
