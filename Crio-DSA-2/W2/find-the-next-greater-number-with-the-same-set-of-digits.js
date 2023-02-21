/*

Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

Input format
A 32 bit integer N

Output format
A single integer

Sample Input 1
12

Sample Output 1
21

Explanation
There is only one number greater than 12 which is composed of 2 and 1 and it is 21.

Constraints
0<= N <= 10^9

*/

function nextGreaterElementWithSameSetOfDigits(n) {
  let N = String(n).split("");
  let i = N.length - 1;
  let j = i - 1;
  let min = Infinity;

  while (i > 0) {
    if (j < 0) {
      i--;
      j = i - 1;
    }
    let temp;
    if (N[i] > N[j]) {
      temp = N[i];
      N[i] = N[j];
      N[j] = temp;
      temp = N.splice(j + 1).sort((a, b) => a - b);
      N = N.concat(temp);

      if ((temp = Number(N.join(""))) > n) {
        min = Math.min(min, temp);
        N = String(n).split("");
      } else {
        N = String(n).split("");
        i--;
        j = 1;
      }
    }
    j--;
  }

  if (min > 2 ** 31 - 1) return -1;

  return min;
}

console.log(nextGreaterElementWithSameSetOfDigits(5179));
// 5197