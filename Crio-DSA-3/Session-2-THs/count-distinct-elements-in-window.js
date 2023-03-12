/*

Given an array of N elements and an integer B, you have to find the count of distinct numbers in all windows of size B.

You have to return an array of size N-B+1 where i'th element in the array is the number of distinct elements in sequence Ai, Ai+1 ,..., Ai+B-1. If B > N, return an empty array.

Input format
There are 2 lines of input

First line contains two space separated integers N and B.

Second line contains N space separated integers representing the array A.

Output format
Return the array space separated in the first line.

Function definition
You have to implement the given function. It accepts three arguments - n, b and the input array. You have to return the new array as described.

Sample Input 1
6 3

1 2 1 3 4 3

Sample Output 1
2 3 3 2

Explanation
First range will be [1,2,1] , in which number of distinct elements are 2

Second range will be [2,1,3], in which number of distinct elements are 3

Third range will be [1,3,4], in which number of distinct elements are 3

Fourth range will be [3,4,3], in which number of distinct elements are 2

Constraints
1<=N<=100000

1<=B<=100000

1<=Ai<=10000

*/

function countDistinct(n, b, arr) {
  if (b > n) {
    return [];
  }

  // Initialize a hash map to keep a count of distinct elements in the current window
  let hm = new Map();
  for (let i = 0; i < b; i++) {
    if (!hm.has(arr[i])) {
      hm.set(arr[i], 1);
    } else {
      hm.set(arr[i], hm.get(arr[i]) + 1);
    }
  }

  // Initialize the result array
  let res = [hm.size];

  // Traverse the array and maintain a window of size B
  for (let i = b; i < n; i++) {
    // Remove the leftmost element from the hash map
    if (hm.get(arr[i - b]) === 1) {
      hm.delete(arr[i - b]);
    } else {
      hm.set(arr[i - b], hm.get(arr[i - b]) - 1);
    }

    // Add the rightmost element to the hash map
    if (!hm.has(arr[i])) {
      hm.set(arr[i], 1);
    } else {
      hm.set(arr[i], hm.get(arr[i]) + 1);
    }

    // Append the count of distinct elements in the current window to the result array
    res.push(hm.size);
  }

  return res;
}

console.log(countDistinct(6, 3, [1, 2, 1, 3, 4, 3]));
