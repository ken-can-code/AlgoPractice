const myMathMax = (numbers) => {
  let max = -Infinity;

  numbers.forEach((num) => {
    if (num > max) {
      max = num;
    }
  });

  return max;
};

// console.log(myMathMax([7, 3, 4, 5]));


//  * Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
//  */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const rangeSumBST = function(root, L, R) {
  let sum = 0;

  if (root.val >= L && root.val <= R) {
    sum += root.val;
  }

  if (root.val >= L) {
    sum += rangeSumBST(root.left, L, R);
  }
  if (root.val <= R) {
    sum += rangeSumBST(root.right, L, R);
  }

  return sum;
};


const binaryTreeLargerSumBranch = (arr) => {
  if (arr.length < 1) {
    return '';
  }
  let leftSide = [];
  let rightSide = [];
  let sliceSize = 1;
  let returnString = '';
  let i = 1;

  while (i < arr.length) {
    leftSide = leftSide.concat(arr.slice(i, i + sliceSize));
    sliceSize *= 2;
    i += sliceSize;
  }
  i = 2;
  sliceSize = 1;
  let incrementer = 3;

  while (i < arr.length) {
    rightSide = rightSide.concat(arr.slice(i, i + sliceSize));
    sliceSize *= 2;
    i += incrementer;
    incrementer *= 2;
  }

  const leftTotal = leftSide.reduce((acc, num) => {
    if (num > 0) {
      return acc + num;
    }
    return acc;
  });
  const rightTotal = rightSide.reduce((acc, num) => {
    if (num > 0) {
      return acc + num;
    }
    return acc;
  });

  if (leftTotal > rightTotal) {
    returnString = 'Left';
  } else if (rightTotal > leftTotal) {
    returnString = 'Right';
  }

  return returnString;
};

const testArray = [];

for (let i = 1; i < 35; i += 1) {
  testArray.push(i);
}

// console.log(binaryTreeLargerSumBranch([3, 5, 7, 10, -1, 9]));
