import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app";
import AuthContextProvider from "./contexts/auth";
import { CategoryContextProvider } from "./contexts/category";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContextProvider>
      <CategoryContextProvider>
        <App />
      </CategoryContextProvider>
    </AuthContextProvider>
  </StrictMode>,
);
