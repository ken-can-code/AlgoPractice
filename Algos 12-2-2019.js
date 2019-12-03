/**
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = function(text) {
  let count = 0;
  const letterCount = {};

  for (let i = 0; i < text.length; i += 1) {
    letterCount[text[i]] = (letterCount[text[i]] || 0) + 1;
  }

  while (letterCount.b > 0) {
    if (letterCount.b >= 1) {
      letterCount.b -= 1;
    } else {
      break;
    }
    if (letterCount.a >= 1) {
      letterCount.a -= 1;
    } else {
      break;
    }
    if (letterCount.l >= 2) {
      letterCount.l -= 2;
    } else {
      break;
    }
    if (letterCount.o >= 2) {
      letterCount.o -= 2;
    } else {
      break;
    }
    if (letterCount.n >= 1) {
      letterCount.n -= 1;
    } else {
      break;
    }
    count += 1;
  }

  return count;
};

console.log(maxNumberOfBalloons('loonbalxballpoon')); // --> 2
