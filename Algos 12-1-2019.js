/**
 * Initialize your data structure here.
 */
const MyHashSet = function() {
  this.hashmap = {};
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  this.hashmap[key] = true;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  delete this.hashmap[key];
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  if (this.hashmap[key] !== undefined) {
    return true;
  }
  return false;
};


//  Your MyHashSet object will be instantiated and called as such:
const key = 5;
 const obj = new MyHashSet();
 obj.add(key);
 obj.remove(key);
 let param_3 = obj.contains(key);

//  console.log(param_3);

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

const A = 'this apple is sweet';
const B = 'this apple is sour';

console.log(uncommonFromSentences(A, B));
