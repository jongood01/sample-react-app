import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { TodosPage } from "./todos/pages";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodosPage />
  </React.StrictMode>
);
