import { useContext } from "react";
import { TextContext } from "../../context/TextContext";
import "./TextEditor.css";
function TextEditor() {
  const { text, updateText, charLimit } = useContext(TextContext);
  return (
    <section className="text-editor">
      <textarea
        value={text}
        onChange={(e) => updateText(e.target.value)}
        maxLength={charLimit}
        placeholder="Enter or paste your text here..."
      />
      <div className="editor-footer">
        <span>
          {text.length} / {charLimit} characters
        </span>
      </div>
    </section>
  );
}
export default TextEditor;
export function removeDuplicateLines(text) {
  return [...new Set(text.split("\n"))].join("\n");
}
export function trimBlankLines(text) {
  return text
    .split("\n")
    .filter((line) => line.trim() !== "")
    .join("\n");
}
