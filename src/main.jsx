import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Importa tu componente principal aquí
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
