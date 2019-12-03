/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
const uncommonFromSentences = function(A, B) {
  const uncommonWords = [];
  const wordsA = A.split(' ');
  const wordsB = B.split(' ');

  const singleOccuranceTracker = {};
  const multipleOccuranceTracker = {};

  wordsA.forEach((word, index, array) => {
    if (singleOccuranceTracker[word] === undefined && multipleOccuranceTracker[word] === undefined) {
      singleOccuranceTracker[word] = true;
    } else if (singleOccuranceTracker[word] !== undefined) {
      multipleOccuranceTracker[word] = true;
      delete singleOccuranceTracker[word];
    }
  });

  wordsB.forEach((word, index, array) => {
    if (singleOccuranceTracker[word] === undefined && multipleOccuranceTracker[word] === undefined) {
      singleOccuranceTracker[word] = true;
    } else if (singleOccuranceTracker[word] !== undefined) {
      multipleOccuranceTracker[word] = true;
      delete singleOccuranceTracker[word];
    }
  });

  return Object.keys(singleOccuranceTracker);
};