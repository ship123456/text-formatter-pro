import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TextProvider } from "./context/TextContext";
createRoot(document.getElementById("root")).render(
  <TextProvider>
    <App />
  </TextProvider>,
);
