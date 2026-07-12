export function downloadTextFile(text) {
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "formatted-text.txt";
  link.click();
  URL.revokeObjectURL(url);
}

export async function pasteText(text, updateText) {
  const clipboardText = await navigator.clipboard.readText();
  updateText(text + "\n" + clipboardText);
}