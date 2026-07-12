import { useContext, useState } from "react";
import { TextContext } from "../../context/TextContext";
import "./FindReplace.css";
function FindReplace() {
  const { text, updateText, saveToRecent, validateText, setError } =
    useContext(TextContext);
  const [find, setFind] = useState("");
  const [replace, setReplace] = useState("");
  function replaceAll() {
    if (!validateText()) return;
    if (!find.trim()) {
      setError("Please enter text to find.");
      return;
    }
    saveToRecent();
    const regex = new RegExp(find, "gi");
    const updatedText = text.replace(regex, replace);
    updateText(updatedText);
    setFind("");
    setReplace("");
  }
  return (
    <section className="find-replace">
      <h3>Find & Replace</h3>
      <div className="find-box">
        <input
          value={find}
          onChange={(e) => {
            setFind(e.target.value);
            setError("");
          }}
          placeholder="Find"
        />
        <input
          value={replace}
          onChange={(e) => setReplace(e.target.value)}
          placeholder="Replace with"
        />
        <button onClick={replaceAll}>Replace</button>
      </div>
      {/* {error && <span className="error-message">{error}</span>} */}
    </section>
  );
}
export default FindReplace;
