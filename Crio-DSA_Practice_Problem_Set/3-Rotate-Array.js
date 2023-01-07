/*
Problem Description
Given an array, rotate the array to the right by k steps, where k is non-negative.

Input format
First line contains two space separated integers N and K. Second line contains n space separated integers.

Output format
Only line contains N space separated integers.

Sample Input 1
7
3
1 2 3 4 5 6 7

Sample Output 1
5 6 7 1 2 3 4

Explanation
rotate 1 steps to the right: [7,1,2,3,4,5,6] rotate 2 steps to the right: [6,7,1,2,3,4,5] rotate 3 steps to the right: [5,6,7,1,2,3,4]

Constraints
1 <= N,K <= 100000 -10^9 <= A[i] <= 10^9
*/

function rotateArray(n, k, nums) {
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  k %= n;

  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);

  return nums;
}

console.log(rotateArray(7, 3, [1, 2, 3, 4, 5, 6, 7]));
