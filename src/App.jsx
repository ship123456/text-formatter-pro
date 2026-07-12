import { useState, useContext } from "react";
import Header from "./components/Header/Header.jsx";
import TextEditor from "./components/TextEditor/TextEditor.jsx";
import FormatTools from "./components/FormatTools/FormatTools.jsx";
import FindReplace from "./components/FindReplace/FindReplace.jsx";
import ActionButtons from "./components/ActionButtons/ActionButtons";
import Footer from "./components/Footer/Footer";
import OtherTools from "./components/otherTools/otherTools";
import AboutModal from "./components/AboutModal/AboutModal";
import RecentTextsModal from "./components/RecentTextsModal/RecentTextsModal";
import CharacterLimitModal from "./components/CharacterLimitModal/CharacterLimitModal";
import StatsPanel from "./components/StatsPanel/StatsPanel.jsx";
import { TextContext } from "./context/TextContext";
function App() {
  const [activeModal, setActiveModal] = useState(null);
  return (
    <div className="app">
      <Header setActiveModal={setActiveModal} />
      <main>
        <TextEditor />
        <FormatTools />
        <FindReplace />
        <OtherTools />
        <StatsPanel />
        <ActionButtons />
      </main>
      {activeModal === "about" && (
        <AboutModal closeModal={() => setActiveModal(null)} />
      )}
      {activeModal === "recent" && (
        <RecentTextsModal closeModal={() => setActiveModal(null)} />
      )}
      {activeModal === "limit" && (
        <CharacterLimitModal closeModal={() => setActiveModal(null)} />
      )}
      <Footer />
    </div>
  );
}
export default App;
