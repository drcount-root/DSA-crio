/*

Given a sorted integer array of length n with possible duplicate elements. Find the number of occurrences of an integer k using binary search.

Input format
There are 2 lines of input.

First line contains 2 space separated integers n, k - Number of elements, the integer k.

Second line contains n space separated integers - The integer array.

Output format
Print the number of occurrences of the integer k.

Sample Input 1
5 2

-1 2 2 4 7

Sample Output 1
2

Explanation 1
The integer 2 occurs 2 times in the given array.

Constraints
1 <= n <= 10^6

-10^9 <= k <= 10^9

-10^9 <= A[i] <= 10^9

*/

const bSearch = (arr, l, r, x) => {
  if (r < l) return -1;
  let mid = l + parseInt((r - l) / 2);
  if (arr[mid] == x) return mid;
  if (arr[mid] > x) return bSearch(arr, l, mid - 1, x);
  return bSearch(arr, mid + 1, r, x);
};

function countOccurrences(n, k, arr) {
  {
    let ind = bSearch(arr, 0, n - 1, k);
    if (ind == -1) return 0;

    let count = 1;
    let left = ind - 1;

    while (left >= 0 && arr[left] == k) {
      count++;
      left--;
    }

    let right = ind + 1;
    while (right < n && arr[right] == k) {
      count++;
      right++;
    }

    return count;
  }
}

console.log(countOccurrences(5, 2, [-1, 2, 2, 4, 7]));
