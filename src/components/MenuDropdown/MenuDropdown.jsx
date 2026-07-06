import { useContext } from "react";
import { TextContext } from "../../context/TextContext";
import "./MenuDropdown.css";
function MenuDropdown({ setActiveModal }) {
  const {
    undoLastChange,
    updateText,
    autoSave,
    toggleAutoSave,
    resetPreferences,
    text,
  } = useContext(TextContext);
  async function pasteText() {
    const clipboardText = await navigator.clipboard.readText();
    updateText(text + "\n" + clipboardText);
  }
  return (
    <>
      <div className="menu-dropdown">
        <button onClick={undoLastChange}>↩ Undo Last Change</button>
        <button onClick={pasteText}>📋 Paste Text</button>
        <button onClick={toggleAutoSave}>
          💾 Auto Save {autoSave ? "ON" : "OFF"}
        </button>
        <button onClick={() => setActiveModal("recent")}>
          🕘 Recent Texts
        </button>
        <button onClick={() => setActiveModal("limit")}>
          🔢 Character Limit
        </button>
        <button onClick={resetPreferences}>↺ Reset All</button>
        <button onClick={() => setActiveModal("about")}>ℹ About</button>
      </div>
    </>
  );
}
export default MenuDropdown;
