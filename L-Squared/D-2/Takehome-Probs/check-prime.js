/*

Given a number find if it is a prime number or not.

Input format
First line will contain a number T. The number of test cases. Each of the next T lines contains an integer N.

Output format
In each line print "true" if it is a prime number otherwise "false".

Sample Input 1
2 1 2

Sample Output 1
false true

Explanation
1 is not a prime number whereas 2 is a prime.

Constraints
1 <= T <= 10 0 <= N <= 500

*/

function checkPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(checkPrime(25));

console.log(checkPrime(13));
