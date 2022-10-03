/**
 * findRotationCount
Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

Constraints:

Time Complexity: O(log N)
 */

function findRotationCount(arr) {
  let firstIdx = 0;
  let lastIdx = arr.length - 1;

  while (firstIdx !== lastIdx) {
    let midIdx = Math.floor((firstIdx + lastIdx) / 2);

    let midVal = arr[midIdx];
    let firstVal = arr[firstIdx];
    let lastVal = arr[lastIdx];

    if (midVal < firstVal || midVal < lastVal) {
      lastIdx = midIdx;
    } else {
      firstIdx = midIdx + 1;
    }
  }

  return firstIdx;
  
}

module.exports = findRotationCount