/*

Given 2 numbers a and b, you have to find the gcd of these 2 numbers using recursion.

Input format
First line contains an integer t - Number of test cases.

First line of each test contains 2 integers - a and b.

Output format
Print the gcd of each test case in a separate line.

Sample Input 1
2

8 20

80 80

Sample Output 1
4

80

Explanation
The gcd of 8 & 20 is 4 as 4 is the greatest number that divides both 8 & 20.

Constraints
t <= 1000

1 <= a, b <= 10^18

*/

function calGcd(a, b) {
  if (b != 0) return calGcd(b, a % b);
  else return a;
}

console.log(calGcd(45, 75));
// 15
