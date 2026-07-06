export function toUpperCase(text) {
  return text.toUpperCase();
}
export function toLowerCase(text) {
  return text.toLowerCase();
}
export function capitalizeText(text) {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
export function removeExtraSpaces(text) {
  return text.replace(/\s+/g, " ").trim();
}
export const removeDuplicateLines = (text) => {
  const lines = text.split("\n");
  const uniqueLines = [];
  lines.forEach((line) => {
    const cleanLine = line.trim();
    if (!uniqueLines.includes(cleanLine)) {
      uniqueLines.push(cleanLine);
    }
  });
  return uniqueLines.join("\n");
};
export function trimBlankLines(text) {
  return text
    .split("\n")
    .filter((line) => line.trim() !== "")
    .join("\n");
}
export function sortLines(text) {
  return text
    .split("\n")
    .sort((a, b) => a.localeCompare(b))
    .join("\n");
}
