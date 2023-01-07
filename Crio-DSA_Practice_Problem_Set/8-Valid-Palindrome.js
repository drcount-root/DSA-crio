/*
Problem Description
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note:

For the purpose of this problem, we define empty string as valid palindrome.

Input format
A single line that contains the string S.

Output format
Print "true"(without quotes) if it is valid Palindrome "false"(without quotes) otherwise.

Sample Input 1
A man, a plan, a canal: Panama

Sample Output 1
true

Explanation 1
The given string is palindrome when considering only alphanumeric characters.

Sample Input 2
race a car

Sample Output 2
false

Explanation 2
The given string is not a palindrome when considering alphanumeric characters.

Constraints
1 <= length(S) <= 1000
*/

function isPalindrome(s) {
  let regEx = /[\W_]/g;
  let lowRegStr = s.toLowerCase().replace(regEx, "");
  let reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
