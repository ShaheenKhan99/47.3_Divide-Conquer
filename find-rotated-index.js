/** 
Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

Constraints:

Time Complexity: O(log N)
*/

function findRotatedIndex(arr, num) {
  let firstIdx = 0;
  let lastIdx= arr.length - 1;

  while (firstIdx <= lastIdx) {
    let midIdx = Math.floor((firstIdx + lastIdx) / 2);
    if (arr[midIdx] == num) return midIdx;

    if (arr[midIdx] >= arr[firstIdx]) {
      if (arr[firstIdx] <= num && num < arr[midIdx]) {
        lastIdx = midIdx - 1;
      } else {
        firstIdx = midIdx + 1;
      }
    } else {
      firstIdx = midIdx + 1;
      lastIdx = midIdx - 1;
    }
  }

  return -1;
 
}

module.exports = findRotatedIndex