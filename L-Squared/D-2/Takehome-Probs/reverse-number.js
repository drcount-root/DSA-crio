/*

Given a number, return the reverse of that number.

Input format
A single integer N.

Output format
Reverse the number and return the number. Note number must start with (1-9) digits only unless it is a single digit number.

Sample Input 1
15

Sample Output 1
51

Explanation
15 when reversed would be converted to 51

Sample Input 2
7

Sample Output 2
7

Explanation
7 when reversed would be converted to 7

Constraints
0 <= N <= 1000000

*/

const num = 1575698;

const reverseNumFunc = (n) => {
  let r = 0;
  let sum = 0;

  while (n > 0) {
    r = n % 10;
    sum = sum * 10 + r;
    n = Math.trunc(n / 10);
  }

  return sum;
};

console.log(reverseNumFunc(num));
