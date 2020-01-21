/**
 * Represents a getting random questions from an array
 * @param {Array} arr - an array of Questons
 * @returns {Array} - Returning new set of 5 random questions.
 *
 */

export const getRandomQuestions = arr => {
  if (!Array.isArray(arr)) {
    return "argument should be an array";
  }

  //returning original arr because there is no reason to shuffle
  if (arr.length < 2) {
    return arr;
  }
  // using map to create new array in order not to mutate original
  let newArr = arr.map(item => item);
  //shuffling an array based on Fisher-Yates Algorithm
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = temp;
  }

  return newArr.slice(0, 5);
};
