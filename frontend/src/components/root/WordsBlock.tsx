export const WordsBlock = (words: string[]) => {
  const items = words.map((word) => <div key={word}>{word}</div>);
  return items;
};
