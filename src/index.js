import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraBaseProvider, ColorModeScript, DarkMode, theme } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <>
    <ColorModeScript />
    <ChakraBaseProvider theme={theme}>
      <ColorModeSwitcher />
      <App />
    </ChakraBaseProvider>
  </>
);

export const server = `https://api.coingecko.com/api/v3`