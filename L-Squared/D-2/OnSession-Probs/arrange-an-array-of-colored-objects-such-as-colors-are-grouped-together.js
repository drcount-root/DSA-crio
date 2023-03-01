/*

Given an array with n objects colored red, white or blue,

sort them in-place so that objects of the same color are adjacent,

with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not supposed to use the library's sort function for this problem.

Input format
First-line will contain the number of objects n.

Next line will contain n space-separated integers.

Output format
A single line that contains the numbers in the sorted order.

Sample Input 1
6

1 1 1 2 2 0

Sample Output 1
0 1 1 1 2 2

Constraints
1 <= length(S) <= 200000

*/

function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] === 0) {
      // swap nums[low] and nums[mid]
      let temp = nums[low];
      nums[low] = nums[mid];
      nums[mid] = temp;
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      // swap nums[mid] and nums[high]
      let temp = nums[mid];
      nums[mid] = nums[high];
      nums[high] = temp;
      high--;
    }
  }

  return nums;
}

console.log(sortColors([1, 1, 1, 2, 2, 0]));
