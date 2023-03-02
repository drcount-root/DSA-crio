/*

Given an array A, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Input format
First line will contain a single integer N representing the size of array

Next line will contain N space separated integers representing the array A.

Output format
First line should contain N space separated integers.

Sample Input 1
2

0 1

Sample Output 1
1 0

Constraints:
1<=N<=200000

0<=A[i]<=100000

*/

function moveZeroes(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[count++] = nums[i];
    }
  }
  while (count < nums.length) {
    nums[count++] = 0;
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 2, 3, 0, 4]));
