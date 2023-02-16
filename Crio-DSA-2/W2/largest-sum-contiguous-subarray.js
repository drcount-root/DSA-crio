/*

Given an array, find a non-empty contiguous subarray with the largest sum.

Input format
There are 2 lines of input.

First line contains N, the number of elements in the array.

Second line contains N space separated numbers, representing the array elements.

Output format
A single integer which is the maximum possible contiguous subarray sum

Constraints
1 ≤ N ≤ 10^5

-10^9 ≤ A[i] ≤ 10^9

Sample Input 1
8

-2 -3 4 -1 -2 1 5 -3

Sample Output 1
7

Explanation 1
The subarray [4 -1 -2 1 5] has sum 7, which is the maximum possible.

*/

function contigiousSequence(n, arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < n; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

console.log(contigiousSequence(8, [-2, -3, 4, -1, -2, 1, 5, -3]));
