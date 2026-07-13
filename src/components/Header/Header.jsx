import "./Header.css";
import "./Header.css";
import { useState } from "react";
import MenuDropdown from "../MenuDropdown/MenuDropdown";
function Header({ setActiveModal,activeModal }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header">
      <div className="header-title">
        <span className="logo">📝</span>
        <div>
          <h1>Text Formatter Pro</h1>
          <p>Format and clean your text</p>
        </div>
      </div>
      <div className="header-actions">
        <button className="menu-btn" onClick={() => setShowMenu(!showMenu)}>
          ⋮
        </button>
        {showMenu && (
          <MenuDropdown
            activeModal={activeModal}
            setActiveModal={setActiveModal}
          />
        )}
      </div>
    </header>
  );
}
export default Header;
