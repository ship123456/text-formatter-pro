import "./otherTools.css";
import useTextFormatter from "../../hooks/useTextFormatter";
function OtherTools() {
  const { removeDuplicates, trimLines, sortTextLines } = useTextFormatter();
  return (
    <section className="other-tools">
      <h3>OTHER TOOLS</h3>
      <div className="tool-grid">
        <button onClick={removeDuplicates}>
          <span>☰</span>
          Remove Duplicates
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
