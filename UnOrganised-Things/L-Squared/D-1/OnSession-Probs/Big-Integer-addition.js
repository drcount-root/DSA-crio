/*

Given two numbers as strings. The numbers may be very large (may not fit in long long int), the task is to find sum of these two numbers.

Input format
First line contains two space separated strings s1 and s2.

Output format
An integer representing the sum of s1 and s2.

Sample Input 1
10 24

Sample Output 1
34

Explanation
The sum of 10 and 24 is 34.

Constraints
1 <= |s1| , |s2| <= 500

*/

function addBigIntegers(a, b) {
  if (b.length > a.length) {
    [a, b] = [b, a];
  }

  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry !== 0) {
    const digitA = i >= 0 ? parseInt(a[i]) : 0;
    const digitB = j >= 0 ? parseInt(b[j]) : 0;
    const sum = digitA + digitB + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
    i--;
    j--;
  }

  return result;
}

console.log(addBigIntegers("250", "350"));
