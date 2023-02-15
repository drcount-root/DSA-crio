/*

Given two sorted arrays of size M and N, merge the two arrays and return the final array, sorted.

Input format
A single Integer M, that contains the number of elements in the first array.

A single Integer N, that contains the number of elements in the second array.

Next Line contains M space Integers of the array nums1.

Next Line contains N space Integers of the array nums2.

Output format
Print the array after merging.

Sample Input 1
3

3

1 2 3

2 5 6

Sample Output 1
1 2 2 3 5 6

Explanation 1
The sorted array is returned after merging.

Constraints
1 <= N,M <= 10^5

|nums1[i] | <= 10^9

|nums2[i] | <= 10^9

*/


function mergeSortedArrays(m, nums1, n, nums2) {
    const mergedArray = [];
    let i = 0, j = 0;
    
    while (i < m && j < n) {
      if (nums1[i] < nums2[j]) {
        mergedArray.push(nums1[i]);
        i++;
      } else {
        mergedArray.push(nums2[j]);
        j++;
      }
    }
    
    // add any remaining elements from nums1
    while (i < m) {
      mergedArray.push(nums1[i]);
      i++;
    }
    
    // add any remaining elements from nums2
    while (j < n) {
      mergedArray.push(nums2[j]);
      j++;
    }
    
    return mergedArray;
  }
  
  // example usage
  const nums1 = [1, 2, 3];
  const nums2 = [2, 5, 6];
  const merged = mergeSortedArrays(3, nums1, 3, nums2);
  console.log(merged); // output: [1, 2, 2, 3, 5, 6]
  