/*

Given an array of integers and a number k, find the maximum sum of a subarray of size k.

Input format
First line of input contains two integers N and K, where N is the size of the array and K is the subarray size.

Second line of input contains N integers denoting the array elements.

Output format
Print the maximum sum of a subarray of size k.

Sample Input 1
4 2

100 200 300 400

Sample Output 1
700

Explanation
We get maximum sum by adding subarray {300,400}

of size 2.

Constraints
1<=K<=N<=100000

0<=abs(arr[i])<=10000

*/

function maximumSubarraySumSizeK(N, A, K) {
  let result = 0;

  // computing sum of first window of size K
  for (let i = 0; i < K; i++) {
    result += A[i];
  }

  // compute sums of remaining windows by removing 1st elem of previous window & adding last elem of the current window
  let currentSum = result;
  for (let i = K; i < N; i++) {
    currentSum += A[i] - A[i - K];
    result = Math.max(result, currentSum);
  }

  return result;
}

console.log(maximumSubarraySumSizeK(4, [100, 200, 300, 400], 2));
