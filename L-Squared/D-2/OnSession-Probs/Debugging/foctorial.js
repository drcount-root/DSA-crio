/*

Given a number n, you have to calculate the factorial of that number.

Input format
First line contains an integer - n.

Output format
Print the factorial of the given number.

Sample Input 1
3

Sample Output 1
6

Explanation 1
3! = 3.2.1 = 6

Constraints
0 <= n <= 10

*/

function factorial(N) {
  let ans = 1;

  if (N === 0) return ans;

  //   if (N < 0) return "Err";

  for (let i = 1; i <= N; i++) {
    ans *= i;
  }

  return ans;
}

console.log(factorial(5));

console.log(factorial(0));

console.log(factorial(-1));
