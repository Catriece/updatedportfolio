import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./themes";
import { PageViewContextProvider } from "./context/page-view.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PageViewContextProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </PageViewContextProvider>
  </React.StrictMode>
);
