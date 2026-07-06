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
  const { text, updateText, saveToRecent } = useContext(TextContext);
  function uppercase() {
    saveToRecent();
    updateText(toUpperCase(text));
  }
  function lowercase() {
    saveToRecent();
    updateText(toLowerCase(text));
  }
  function sortTextLines() {
    updateText(sortLines(text));
  }
  function capitalize() {
    saveToRecent();
    updateText(capitalizeText(text));
  }
  function removeSpaces() {
    saveToRecent();
    updateText(removeExtraSpaces(text));
  }
  function removeDuplicates() {
    updateText(removeDuplicateLines(text));
  }
  function trimLines() {
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
