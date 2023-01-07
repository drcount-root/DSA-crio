/*
Problem Description
Given an array num containing n + 1 integers, where each integer is between 1 and n (inclusive), hence at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Input format
First-line will contain an integer n.

Next line will contain n+1 space-separated integers.

Output format
Print the duplicate number found in the list.

Sample Input 1
5

2 4 5 3 1 5

Sample Output 1
5

Explanation 1
5 is the duplicate in the array

Sample Input 2
7

3 6 1 5 7 4 2 5

Sample Output 2
5

Explanation 2
5 is the duplicate in the array

Constraints
0<= n <=1000000
*/

function findTheDuplicateNumber(nums) {
  let arr_size = nums.length;

  for (let i = 0; i < arr_size; i++) {
    nums[nums[i] % arr_size] = nums[nums[i] % arr_size] + arr_size;
  }

  for (let i = 0; i < arr_size; i++) {
    if (nums[i] >= arr_size * 2) {
      return i;
    }
  }
}

console.log(findTheDuplicateNumber([2, 4, 5, 3, 1, 5]));

console.log(findTheDuplicateNumber([4, 2, 3, 1, 3, 6]));
