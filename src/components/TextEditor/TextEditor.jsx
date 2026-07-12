import { useContext, useState } from "react";
import { TextContext } from "../../context/TextContext";
import "./TextEditor.css";
function TextEditor() {
  const { text, updateText, charLimit, error } = useContext(TextContext);
  return (
    <section className="text-editor">
      <textarea
        value={text}
        onChange={(e) => updateText(e.target.value)}
        maxLength={charLimit}
        placeholder="Enter or paste your text here..."
      />
      <div className="editor-footer">
        {error && <p className="error-message">{error}</p>}
        <span className="char-count">
          {text.length} / {charLimit} characters
        </span>
      </div>
    </section>
  );
}
export default TextEditor;
