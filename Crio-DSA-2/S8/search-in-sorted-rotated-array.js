/*

An array sorted in ascending order is rotated about a pivot unknown to you. Such an array is referred to as a rotated sorted array or a sorted-pivoted array. For example : [1,2,3,4,5] is a sorted array while [3,4,5,1,2] is a rotated sorted array.


You are given a rotated sorted array, and some integer values. You have to find each value’s location in the array. If the value is present, return the index in which it is stored ( 0 based indexing) , otherwise if not found return -1.


Assume the array doesn’t have duplicates.

Input format
There are Q+3 lines of input.

First line will have a single integer N denoting the size of the array.

Second line will contain N space separated integers.

Third line will contain a single integer Q denoting the number of targets to be searched..

Next Q lines will have a single integer,X in each line denoting the target value. You have to search for each of these target values in turn.

Output format
One line per output for each target search, with -1 or the index at which the integer is found.

Function Definition
Complete the function search in the code editor for a language of your choice.

search has the following parameters :

nums : An array of numbers having its values in a rotated sorted order

target : An integer representing the number to be searched in nums

search returns :

int : An integer denoting the index of the target to be searched. If target not present returns -1.

Constraints
1 <= N <= 10^6 where N denotes the size of the input array

1 <= A[i] <= 10^9 where A[i] denotes the ith element of the input array

1 <= Q <= 10^6 where Q denotes the number of targets to be searched

1 <= X <= 10^9 where X denotes the target element to be search

Sample Input 1
7

4 5 6 9 10 2 3

2

3

8

Sample Output 1
6

-1

Explanation 1
The element 3 is found in the array at index 6. Element 8 is not found in the array, thus -1.

Sample Input 2
6

5 6 8 1 3 4

1

0

Sample Output 2
-1

Explanation 2
The element 0 is not found in the array.

*/

function search(nums, target) {
  let l = 0;
  let h = nums.length - 1;
  const s = (nums, l, h, target) => {
    if (l > h) return -1;

    let mid = parseInt((l + h) / 2);

    if (nums[mid] == target) return mid;

    if (nums[l] <= nums[mid]) {
      if (target >= nums[l] && target <= nums[mid])
        return s(nums, l, mid - 1, target);
      return s(nums, mid + 1, h, target);
    }

    if (target >= nums[mid] && target <= nums[h])
      return s(nums, mid + 1, h, target);
    return s(nums, l, mid - 1, target);
  };

  return s(nums, l, h, target);
}

console.log(search([5, 6, 8, 1, 3, 4], 8));
console.log(search([5, 6, 8, 1, 3, 4], 7));
console.log(search([], 9));
