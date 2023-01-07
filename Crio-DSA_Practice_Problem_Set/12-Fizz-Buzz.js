/*
Problem Description
Write a program that outputs the string representation of numbers from 1 to N.

But for multiples of three it should output "Fizz" instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Input format
First line contains an integer representing the value of N.

Output format
Print N lines where each line is a string which is either Fizz or Buzz or FizzBuzz or an integer.

Sample Input 1
15

Sample Output 1
1

2

Fizz

4

Buzz

Fizz

7

8

Fizz

Buzz

11

Fizz

13

14

FizzBuzz

Explanation 1
For n = 1 , 1 is printed.

For n = 3 , Fizz is printed.

For n = 5 , Buzz is printed.

For n = 15 , FizzBuzz is printed.

Constraints
1 <= N <= 100000
*/

function fizzBuzz(n) {
  let ans = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) ans.push("FizzBuzz");
    else if (i % 5 === 0) ans.push("Buzz");
    else if (i % 3 === 0) ans.push("Fizz");
    else ans.push(i);
  }
  return ans;
}

console.log(fizzBuzz(15))