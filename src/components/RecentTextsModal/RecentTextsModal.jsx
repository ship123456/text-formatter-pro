import { useContext } from "react";
import { TextContext } from "../../context/TextContext";
function RecentTextsModal({ closeModal }) {
  const { recentTexts, restoreRecent, deleteRecent, clearRecent } =
    useContext(TextContext);
  return (
    <div className="recent-modal modal">
      <span
        style={{
          position: "absolute",
          right: "10px",
          color: "red",
          cursor: "pointer",
        }}
        onClick={closeModal}
      >
        ✕
      </span>
      <h2
        style={{
          textAlign: "center",
          textDecoration: "underline",
          paddingTop: "20px",
        }}
      >
        Recent Texts
      </h2>
      {recentTexts.length === 0 ? (
        <p style={{ textAlign: "center" }}>No recent texts found</p>
      ) : (
        <>
          {recentTexts.map((item, index) => (
            <div className="recent-card" key={index}>
              <p
                className="recent-card-text"
                style={{ fontSize: "12px" }}
                title={item}
              >
                {item.slice(0, 25)}
                {item.length > 25 ? "..." : ""}
              </p>
              <div className="recent-card-actions">
                <button onClick={() => restoreRecent(item)}>↩ Restore</button>
                <button onClick={() => deleteRecent(index)}>🗑 Delete</button>
              </div>
            </div>
          ))}
        </>
      )}
      {recentTexts.length > 0 && (
        <p
          style={{
            textAlign: "center",
            cursor: "pointer",
            color: "red",
            marginTop: "40px",
          }}
          className="clear-history"
          onClick={clearRecent}
        >
          Clear All History
        </p>
      )}
    </div>
  );
}
export default RecentTextsModal;
