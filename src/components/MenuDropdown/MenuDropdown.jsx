import { useContext } from "react";
import { TextContext } from "../../context/TextContext";
import { pasteText } from "../../utils/fileUtils";
import "./MenuDropdown.css";
import AboutModal from "../AboutModal/AboutModal";
import RecentTextsModal from "../RecentTextsModal/RecentTextsModal";
import CharacterLimitModal from "../CharacterLimitModal/CharacterLimitModal";
function MenuDropdown({ setActiveModal, activeModal }) {
  const {
    undoLastChange,
    updateText,
    autoSave,
    toggleAutoSave,
    resetPreferences,
    text,
  } = useContext(TextContext);
  return (
    <>
      <div className="menu-dropdown">
        <button onClick={undoLastChange}>↩ Undo Last Change</button>
        <button onClick={() => pasteText(text, updateText)}>
          📋 Paste Text
        </button>
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
        {activeModal === "about" && (
          <AboutModal closeModal={() => setActiveModal(null)} />
        )}
        {activeModal === "recent" && (
          <RecentTextsModal closeModal={() => setActiveModal(null)} />
        )}
        {activeModal === "limit" && (
          <CharacterLimitModal closeModal={() => setActiveModal(null)} />
        )}
      </div>
    </>
  );
}
export default MenuDropdown;
