/*

A peak element is an element that is strictly greater than its neighbors. Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks. You may imagine that nums[-1] = nums[n] = -∞. You must write an algorithm that runs in O(log n) time.

Input format
The first line contains an integer N, the size of the input array. The second line contains N integers, the elements of the given array.

Output format
Return a single integer, the index of the peak element in the array (0-based).

Sample Input 1
4

1 2 3 1

Sample Output 1
2

Explanation
3 is a peak element and your function should return the index number 2.

Constraints
1 <= nums.length <= 1000

1 <= nums[i] <= 2^31 - 1

nums[i] != nums[i + 1] for all valid i

*/

function peakElement(N, nums) {
  let low = 0;
  let high = N - 1;
  let mid;

  while (low <= high) {
    mid = parseInt((low + high) / 2);

    if (
      (mid == 0 || nums[mid - 1] <= nums[mid]) &&
      (mid == N - 1 || nums[mid + 1] <= nums[mid])
    )
      break;

    if (mid > 0 && nums[mid - 1] > nums[mid]) high = mid - 1;
    else low = mid + 1;
  }

  return mid;
}

console.log(peakElement(4, [1, 4, 8, 6]));
