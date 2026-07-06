import "./AboutModal.css";
function AboutModal({ closeModal }) {
  return (
    <div className="about-modal">
      <div className="about-content">
        <div className="about-left">
          <div className="about-icon">📝</div>
          <span className="about-version">Version 1.0.0</span>
        </div>
        <div className="about-info">
          <h5>About Text Formatter Pro</h5>
          <p>
            A powerful text formatting tool built to clean, edit and analyze
            your text quickly.
          </p>
          <ul>
            <li>
              <span className="check">✓</span> Case Conversion
            </li>
            <li>
              <span className="check">✓</span> Find & Replace
            </li>
            <li>
              <span className="check">✓</span> Text Cleanup Tools
            </li>
            <li>
              <span className="check">✓</span> Text Statistics
            </li>
            <li>
              <span className="check">✓</span> Recent Texts
            </li>
          </ul>
        </div>
      </div>
      <div className="about-footer">
        <div className="built-text">Built with ❤️ using React</div>
        <span>© 2025 Text Formatter Pro. All rights reserved.</span>
        <button className="about-close" onClick={closeModal}>
          ×
        </button>
      </div>
    </div>
  );
}
export default AboutModal;
