import "./FormatTools.css";
import useTextFormatter from "../../hooks/useTextFormatter";
function FormatTools() {
  const { uppercase, lowercase, capitalize, removeSpaces } = useTextFormatter();
  return (
    <section className="format-tools">
      <h3>Format Text</h3>
      <div className="tool-grid">
        <button onClick={uppercase}>
          <span>Aa</span>
          <span>UPPERCASE</span>
        </button>
        <button onClick={lowercase}>
          <span>aa</span>
          <span>lowercase</span>
        </button>
        <button onClick={capitalize}>
          <span>Aa</span>
          <span>Capitalize</span>
        </button>
        <button onClick={removeSpaces}>
          <span>⇥</span>
          <span>Remove Spaces</span>
        </button>
      </div>
    </section>
  );
}
export default FormatTools;
