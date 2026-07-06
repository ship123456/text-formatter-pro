import { createContext, useEffect, useState } from "react";
export const TextContext = createContext();
const hasChromeStorage = () => {
  return (
    typeof chrome !== "undefined" && chrome.storage && chrome.storage.local
  );
};
// common storage helper
const saveData = (key, value) => {
  if (hasChromeStorage()) {
    chrome.storage.local.set({
      [key]: value,
    });
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
const getData = (keys, callback) => {
  if (hasChromeStorage()) {
    chrome.storage.local.get(keys, callback);
  } else {
    let data = {};
    keys.forEach((key) => {
      const item = localStorage.getItem(key);
      if (item) {
        data[key] = JSON.parse(item);
      }
    });
    callback(data);
  }
};
export function TextProvider({ children }) {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [history, setHistory] = useState([]);
  const [charLimit, setCharLimit] = useState(5000);
  const [autoSave, setAutoSave] = useState(true);
  const [recentTexts, setRecentTexts] = useState([]);
  const [message, setMessage] = useState("");
  /* LOAD */
  useEffect(() => {
    getData(["savedText", "autoSave", "recentTexts", "charLimit"], (data) => {
      if (data.savedText) {
        setText(data.savedText);
      }
      if (data.autoSave !== undefined) {
        setAutoSave(data.autoSave);
      }
      if (data.recentTexts) {
        setRecentTexts(data.recentTexts);
      }
      if (data.charLimit) {
        setCharLimit(data.charLimit);
      }
    });
  }, []);
  /* TEXT SAVE */
  useEffect(() => {
    if (autoSave) {
      saveData("savedText", text);
    }
  }, [text, autoSave]);
  /* RECENT SAVE */
  useEffect(() => {
    if (autoSave) {
      saveData("recentTexts", recentTexts);
    }
  }, [recentTexts, autoSave]);
  /* LIMIT SAVE */
  useEffect(() => {
    if (autoSave) {
      saveData("charLimit", charLimit);
    }
  }, [charLimit, autoSave]);
  function updateText(value) {
    if (value.length <= charLimit) {
      setHistory((prev) => [...prev, text]);
      setText(value);
    }
  }
  function undoLastChange() {
    if (history.length === 0) return;
    const previous = history[history.length - 1];
    setText(previous);
    setHistory(history.slice(0, -1));
  }
  function toggleAutoSave() {
    const updated = !autoSave;
    setAutoSave(updated);
    saveData("autoSave", updated);
    if (!updated) {
      setCharLimit(5000);
      setRecentTexts([]);
      if (hasChromeStorage()) {
        chrome.storage.local.remove(["savedText", "charLimit", "recentTexts"]);
      } else {
        localStorage.removeItem("savedText");
        localStorage.removeItem("charLimit");
        localStorage.removeItem("recentTexts");
      }
    }
  }
  function saveToRecent() {
    if (!text.trim()) return;
    const updated = [text, ...recentTexts].slice(0, 5);
    setRecentTexts(updated);
    setMessage("Saved ✓");
    setTimeout(() => {
      setMessage("");
    }, 2000);
  }
  function restoreRecent(oldText) {
    const newText = text + "\n" + oldText;
    updateText(newText);
  }
  function deleteRecent(index) {
    setRecentTexts(recentTexts.filter((_, i) => i !== index));
  }
  function clearRecent() {
    setRecentTexts([]);
  }
  function resetPreferences() {
    setText("");
    setHistory([]);
    setRecentTexts([]);
    setCharLimit(5000);
    setAutoSave(true);
    setMessage("Reset Complete ✓");
    setTimeout(() => {
      setMessage("");
    }, 2000);
    if (hasChromeStorage()) {
      chrome.storage.local.clear();
    } else {
      localStorage.clear();
    }
  }
  return (
    <TextContext.Provider
      value={{
        text,
        title,
        setTitle,
        updateText,
        charLimit,
        setCharLimit,
        undoLastChange,
        autoSave,
        toggleAutoSave,
        message,
        recentTexts,
        saveToRecent,
        restoreRecent,
        deleteRecent,
        clearRecent,
        resetPreferences,
      }}
    >
      {children}
    </TextContext.Provider>
  );
}
