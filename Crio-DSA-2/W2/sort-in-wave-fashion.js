/*

Given an unsorted array, sort it in wave form. That is, reorder it such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

Input format
There are 2 lines of input.

First line contains an integer N ,the number of input integers in the array.

Second line contains N space separated integers.

Output format
N space separated elements which satisfy the given condition.

Sample Input 1
6

1 5 1 1 6 4

Sample Output 1
1 4 1 5 1 6

Explanation 1
nums[0] <= nums[1] >= nums[2] <= nums[3] >= nums[4] <= nums[5].

Constraints
1 <= N <= 100000

-10^9 <= A[i] <= 10^9

*/

function wiggleSort(arr, n) {
  // sort the array
  arr.sort((a, b) => a - b);

  let left = [];
  let right = [];

  if (n % 2 === 0) {
    left = left.concat(arr.slice(0, n / 2));
    right = right.concat(arr.slice(n / 2, n));
  } else {
    left = left.concat(arr.slice(0, n / 2 + 1));
    right = right.concat(arr.slice(n / 2 + 1, n));
  }

  if (left[left.length - 1] == right[0]) {
    left.reverse();
    right.reverse();
  }

  arr.length = 0;
  left.forEach((item, i) => {
    arr.push(item);
    right[i] ? arr.push(right[i]) : "";
  });

  return arr;
}

console.log(wiggleSort([1, 5, 1, 1, 6, 4], 6));
