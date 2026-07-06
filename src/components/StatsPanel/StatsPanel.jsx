import { useContext } from "react";
import { TextContext } from "../../context/TextContext";
import { getTextStats } from "../../utils/statsUtils";
import "./StatsPanel.css";
function StatsPanel() {
  const { text } = useContext(TextContext);
  const stats = getTextStats(text);
  return (
    <section className="stats-panel">
      <div className="stat-card">
        <span className="stat-icon words-icon">𝑊</span>
        <p>Words</p>
        <div>{stats.words}</div>
      </div>
      <div className="stat-card">
        <span className="stat-icon chars-icon">A</span>
        <p>Characters</p>
        <div>{stats.characters}</div>
      </div>
      <div className="stat-card">
        <span className="stat-icon sentence-icon">☷</span>
        <p>Sentences</p>
        <div>{stats.sentences}</div>
      </div>
      <div className="stat-card">
        <span className="stat-icon time-icon">◴</span> <p>Reading Time</p>
        <div>{stats.readingTime} min</div>
      </div>
    </section>
  );
}
export default StatsPanel;
