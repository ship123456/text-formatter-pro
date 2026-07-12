import { useContext } from "react";
import { TextContext } from "../context/TextContext";
import {
  toUpperCase,
  toLowerCase,
  capitalizeText,
  removeExtraSpaces,
  removeDuplicateLines,
  trimBlankLines,
  sortLines,
} from "../utils/textUtils";
function useTextFormatter() {
  const { text, updateText, saveToRecent, validateText } =
    useContext(TextContext);
  function uppercase() {
    if (!validateText()) return;
    saveToRecent();
    updateText(toUpperCase(text));
  }
  function lowercase() {
    if (!validateText()) return;
    saveToRecent();
    updateText(toLowerCase(text));
  }
  function sortTextLines() {
    if (!validateText()) return;
    updateText(sortLines(text));
  }
  function capitalize() {
    if (!validateText()) return;
    saveToRecent();
    updateText(capitalizeText(text));
  }
  function removeSpaces() {
    if (!validateText()) return;
    saveToRecent();
    updateText(removeExtraSpaces(text));
  }
  function removeDuplicates() {
    if (!validateText()) return;
    updateText(removeDuplicateLines(text));
  }
  function trimLines() {
    if (!validateText()) return;
    updateText(trimBlankLines(text));
  }
  return {
    uppercase,
    lowercase,
    capitalize,
    removeSpaces,
    removeDuplicates,
    trimLines,
    sortTextLines,
  };
}
export default useTextFormatter;
