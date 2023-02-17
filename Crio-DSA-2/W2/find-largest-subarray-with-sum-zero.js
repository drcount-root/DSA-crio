/*

Given an integer array, find the largest subarray with sum 0 . If there is more than one subarray with the largest length, return the subarray with the lowest starting index.

If there is no such sub-array print -1.

Input format
There are 2 lines of input.

First line contains an integer N.

Next line consists of N integers, the values of the array.

Output format
Print the elements of the sub-array with spaces which have the largest length and sum of elements equal to zero.

Sample Input 1
6

2 3 1 -4 0 6

Sample Output 1
3 1 -4 0

Explanation
The largest subarray with sum zero is (3, 1, -4, 0)

Constraints
1 <= N <= 10^5

-10^4 <= arr[i] <= 10^4

*/

function largestSubarraySumZero(n, arr) {
  let sumMap = new Map();
  let maxLen = 0;
  let maxStartIndex = -1;
  let sum = 0;

  sumMap.set(0, -1); // add a default entry to handle edge case

  for (let i = 0; i < n; i++) {
    sum += arr[i];

    if (sumMap.has(sum)) {
      let startIndex = sumMap.get(sum) + 1;
      let len = i - startIndex + 1;

      if (len > maxLen) {
        maxLen = len;
        maxStartIndex = startIndex;
      }
    } else {
      sumMap.set(sum, i);
    }
  }

  if (maxLen > 0) {
    return arr.slice(maxStartIndex, maxStartIndex + maxLen).join(" ");
  } else {
    return -1;
  }
}

console.log(largestSubarraySumZero(6, [2, 3, 1, -4, 0, 6]));

console.log(largestSubarraySumZero(5, [1, 2, 3, 4, 5]));

console.log(largestSubarraySumZero(7, [-1, 1, 2, -2, -1, 3, -3]));

console.log(largestSubarraySumZero(5, [-2, 2, 0, 3, -3]));
