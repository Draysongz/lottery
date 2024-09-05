import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
// Supports weights 100-900
import '@fontsource-variable/inter';

const theme = extendBaseTheme({
  fonts: {
    body: `'inter', sans-serif`
  }
})


import App from "./App.tsx";
import './index.css';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
