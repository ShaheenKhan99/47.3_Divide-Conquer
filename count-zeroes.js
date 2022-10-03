/**
 * countZeroes
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

Constraints:

Time Complexity: O(log N)
 */


function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  if (arr[leftIdx] === 0) return arr.length;
	if (arr[rightIdx] === 1) return 0;

	while (leftIdx <= rightIdx) {
		let midIdx = Math.floor((leftIdx + rightIdx) / 2);
		let midVal = arr[midIdx];
		if (midVal === 0 && arr[midIdx - 1] === 1) {
			return arr.length - midIdx;
		} else if (midVal === 1) {
			leftIdx = midIdx + 1;
		} else {
			rightIdx = midIdx - 1;
		}
	}
}

module.exports = countZeroes