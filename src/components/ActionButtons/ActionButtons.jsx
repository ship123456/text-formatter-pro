import { useContext, useState } from "react";
import { TextContext } from "../../context/TextContext";
import { downloadTextFile } from "../../utils/fileUtils";
import "./ActionButtons.css";
function ActionButtons() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const { text, updateText } = useContext(TextContext);
  function copyText() {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
      navigator.clipboard.writeText(selectedText);
    } else {
      navigator.clipboard.writeText(text);
    }
    setMessage("Copied ✓");
    setMessageType("copy");
    setTimeout(() => {
      setMessage("");
    }, 2000);
  }
  function clearText() {
    updateText("");
  }
  function downloadText() {
    downloadTextFile(text);
    setMessage("Downloaded ✓");
    setMessageType("download");
    setTimeout(() => {
      setMessage("");
    }, 2000);
  }
  return (
    <section className="action-buttons">
      {message && <p className={`notification ${messageType}`}>{message}</p>}
      <button onClick={copyText}>
        <span>📋</span>
        Copy Text
      </button>
      <button onClick={clearText}>
        <span className="delete-icon">✕</span> Clear All
      </button>
      <button onClick={downloadText}>
        <span>⬇</span>
        Download .txt
      </button>
    </section>
  );
}
export default ActionButtons;
