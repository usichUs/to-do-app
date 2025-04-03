import { Stack } from "@mantine/core";
import { PropsWithChildren } from "react";

export function BaseCard({ children }: PropsWithChildren) {
  return (
    <Stack
      bg="var(--mantine-color-body)"
      align="stretch"
      justify="space-around"
      gap="md"
    >
      {children}
    </Stack>
  );
}
