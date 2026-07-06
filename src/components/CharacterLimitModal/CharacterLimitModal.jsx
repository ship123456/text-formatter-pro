import { useContext, useState } from "react";
import { TextContext } from "../../context/TextContext";
import "./CharacterLimitModal.css";
function CharacterLimitModal({ closeModal }) {
  const { charLimit, setCharLimit } = useContext(TextContext);
  const [limit, setLimit] = useState(charLimit);
  const [message, setMessage] = useState("");
  function saveLimit() {
    if (limit <= 0) {
      setMessage("Invalid limit");
      return;
    }
    setCharLimit(Number(limit));
    setMessage("Saved");
    setTimeout(() => {
      setMessage("");
      closeModal();
    }, 2000);
  }
  return (
    <div className="modal">
      <div className="modal-header">
        <h5>Character Limit</h5>
        <button className="limit-close-btn" onClick={closeModal}>
          ✕
        </button>
      </div>
      <p className="modal-description">
        Set the maximum number of characters allowed in the text area.
      </p>
      <div className="limit-options">
        <button onClick={() => setLimit(1000)}>1000</button>
        <button onClick={() => setLimit(5000)}>5000</button>
        <button onClick={() => setLimit(10000)}>10000</button>
      </div>
      <p> </p>
      <span className="save-btn" onClick={saveLimit}>
        Save
      </span>
      {message && (
        <p
          style={{ fontSize: "15px", color: "green", textAlign: "center" }}
          className="notification"
        >
          {message}
        </p>
      )}
    </div>
  );
}
export default CharacterLimitModal;
