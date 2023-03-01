/*

Given a sorted array, remove all duplicates such that each element occurs at most once in the array. Return the length of the modified array.

Note : The input array should be modified in-place i.e. no extra memory should be allocated to any other array and the question should be solved by using O(1) memory.

Input format
There are two lines of input.

The first line consists of an integer N, which denotes the size of the input array

The second line consists of N space separated integers, which acts as our input array.

Output format
Prints the size of the modified array which consists of no duplicates.

Function Definition
Complete the function removeDuplicates.

removeDuplicates has the following parameters :

nums : An array of numbers in the sorted order

removeDuplicates returns :

int : An integer denoting the size of the modified array.

Constraints
0 <= N <= 10^6

1 <= A[i] <= 10^9

where A[i] denotes the ith element of the input array.

Sample Input 1
7

2 4 4 4 6 8 8

Sample Output 1
4

Explanation 1
The array can be modified to [2,4,6,8] after removing all duplicates ensuring that all elements occur once. The length of this array is 4 , hence 4 is the output.

Sample Input 2
4

2 2 3 11

Sample Output 2
3

Explanation 2
The array can be modified to [2,3,11] after removing all duplicates ensuring that all elements occur once. The length of this array is 3 , hence 3 is the output.

*/

const removeDuplicates = (nums) => {
  if (nums.length == 0) return 0;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
};

console.log(removeDuplicates([2, 4, 4, 4, 6, 8, 8]));
