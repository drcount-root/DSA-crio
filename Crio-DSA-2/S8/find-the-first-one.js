/*

Given a sorted array consisting of 0s and 1s only, find the index of the first 1. If there’s no 1 present in the array, return -1

Input format
There are 2 lines of input

First line will contain a single integer n.

Next line will contain n space separated integers.

Output format
Print the index of first occuring if present, otherwise print -1.

Sample Input 1
4

0 0 1 1

Sample Output 1
2

Constraints
1<=n<=100000

0<=Ai<=1

*/

function zeroOnes(n, arr) {
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = parseInt((low + high) / 2);
    if (arr[mid] == 1 && (mid == 0 || arr[mid - 1] == 0)) return mid;
    else if (arr[mid] == 1) high = mid - 1;
    else low = mid + 1;
  }

  return -1;
}

console.log(zeroOnes(4, [0, 0, 1, 1]));
