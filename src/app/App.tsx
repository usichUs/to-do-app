import "./App.css";
import { MantineProvider } from "@mantine/core";
import theme from "./theme";
import Home from "../pages/Home";
import resolver from "./resolver";

function App() {
  return (
    <MantineProvider
      theme={theme}
      cssVariablesResolver={resolver}
      defaultColorScheme="light"
    >
      <Home />
    </MantineProvider>
  );
}

export default App;
