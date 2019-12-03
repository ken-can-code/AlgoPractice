/**
 * @param {string} text
 * @return {number}
 */
const maxNumberOfBalloons = function (text) {
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

const maxNumberOfBalloonsMin = function (text) {
  const map = new Map();
  const lettersToCheck = 'balon';

  for (let i = 0; i < text.length; i += 1) {
    if (map.has(text[i])) {
      map.set(text[i], map.get(text[i]) + 1);
    } else {
      map.set(text[i], 1);
    }
  }

  let totalBalloons = Infinity;

  for (let k = 0; k < lettersToCheck.length; k += 1) {
    if (!map.has(lettersToCheck[k])) {
      return 0;
    }
    if (lettersToCheck[k] === 'l' || lettersToCheck[k] === 'o') {
      totalBalloons = Math.min(totalBalloons, Math.floor(map.get(lettersToCheck[k]) / 2));
    } else {
      totalBalloons = Math.min(totalBalloons, map.get(lettersToCheck[k]));
    }
  }

  return totalBalloons;
};

console.log(maxNumberOfBalloons('loonbalxballpoon')); // --> 2
console.log(maxNumberOfBalloonsMin('balon')); // --> 0
