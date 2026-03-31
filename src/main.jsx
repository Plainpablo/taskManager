import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PageProvider } from "./context/PageContext.jsx";
import { ModalProvider } from "./context/PopUpModalContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import { SideBarMenuProvider } from "./context/SideBarMenuContext.jsx";
import { TaskDatabaseProvider } from "./context/TaskDatabase.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskDatabaseProvider>
    <SideBarMenuProvider>
    <SearchProvider>
        <ModalProvider>
          <PageProvider>
            <App />
          </PageProvider>
        </ModalProvider>
      </SearchProvider>
    </SideBarMenuProvider>
    </TaskDatabaseProvider>
  </StrictMode>,
);
