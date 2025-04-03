import { CSSVariablesResolver } from "@mantine/core";
const resolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {
    "--mantine-color-body": "#e9e9e9",
    "--mantine-color-text": "rgb(0,0,0)",
    "--mantine-color-dimmed": "#333",
    "--mantine-color-bright": "#fff",
  },
  dark: {},
});

export default resolver;
