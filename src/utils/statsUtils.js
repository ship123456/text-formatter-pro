export function getTextStats(text) {
  const characters = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sentences = text
    ? text.split(/\n+/).filter((sentence) => sentence.trim()).length
    : 0;
  const readingTime = Math.ceil(words / 200);
  return {
    characters,
    words,
    sentences,
    readingTime,
  };
}
