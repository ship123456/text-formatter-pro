import "./otherTools.css";
import { useContext } from "react";
import useTextFormatter from "../../hooks/useTextFormatter";
import { TextContext } from "../../context/TextContext";

function OtherTools() {
  const { removeDuplicates, trimLines, sortTextLines } = useTextFormatter();
  const { error } = useContext(TextContext);
  return (
    <section className="other-tools">
      <h3>OTHER TOOLS</h3>
      <div className="tool-grid">
        <button onClick={removeDuplicates}>
          <span>☰</span>
          Remove Duplicates Lines
        </button>
        <button onClick={trimLines}>
          <span>☰</span>
          Trim Blank Lines
        </button>
        <button onClick={sortTextLines}>
          <span>↕</span>
          Sort Lines
        </button>
      </div>
    </section>
  );
}
export default OtherTools;
