import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PageProvider } from "./context/PageContext.jsx";
import { ModalProvider } from "./context/PopUpModalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <PageProvider>
        <App />
      </PageProvider>
    </ModalProvider>
  </StrictMode>,
);
