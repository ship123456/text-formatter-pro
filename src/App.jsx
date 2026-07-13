import { useState, useContext } from "react";
import Header from "./components/Header/Header.jsx";
import TextEditor from "./components/TextEditor/TextEditor.jsx";
import FormatTools from "./components/FormatTools/FormatTools.jsx";
import FindReplace from "./components/FindReplace/FindReplace.jsx";
import ActionButtons from "./components/ActionButtons/ActionButtons";
import Footer from "./components/Footer/Footer";
import OtherTools from "./components/otherTools/otherTools";
import StatsPanel from "./components/StatsPanel/StatsPanel.jsx";
function App() {
  const [activeModal, setActiveModal] = useState(null);
  return (
    <div className="app">
      <Header setActiveModal={setActiveModal}  activeModal={activeModal}
 />
      <main>
        <TextEditor />
        <FormatTools />
        <FindReplace />
        <OtherTools />
        <StatsPanel />
        <ActionButtons />
      </main>
      <Footer />
    </div>
  );
}
export default App;
