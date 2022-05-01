const mostWordsFound = (sentences: string[]): number => {
  let result = 0;

  for (const sentence of sentences) {
    result = Math.max(result, sentence.split(' ').length);
  }

  return result;
};

export default mostWordsFound;
