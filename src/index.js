import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import "./index.css";
import AppContext from "./hooks/context";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </StrictMode>
);
