/*

Given a string S containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Input format
First line contains a string - The string S.

Output format
Print the length of the longest valid substring.

Sample Input 1
()(()(())

Sample Output 1
6

Explanation
The last 6 characters of the string forms the longest valid substring i.e. "()(())".

Constraints
0 <= length of string <= 10^5

*/

function longestValidParentheses(s) {
  // Variables for left and right counter.
  // maxlength to store the maximum length found so far
  let left = 0,
    right = 0,
    maxlength = 0;

  // Iterating the string from left to right
  for (let i = 0; i < s.length; i++) {
    // If "(" is encountered,
    // then left counter is incremented
    // else right counter is incremented
    if (s[i] == "(") left++;
    else right++;

    // Whenever left is equal to right, it signifies
    // that the subsequence is valid and
    if (left == right) maxlength = Math.max(maxlength, 2 * right);
    // Resetting the counters when the subsequence
    // becomes invalid
    else if (right > left) left = right = 0;
  }

  left = right = 0;

  // Iterating the string from right to left
  for (let i = s.length - 1; i >= 0; i--) {
    // If "(" is encountered,
    // then left counter is incremented
    // else right counter is incremented
    if (s[i] == "(") left++;
    else right++;

    // Whenever left is equal to right, it signifies
    // that the subsequence is valid and
    if (left == right) maxlength = Math.max(maxlength, 2 * left);
    // Resetting the counters when the subsequence
    // becomes invalid
    else if (left > right) left = right = 0;
  }
  return maxlength;
}

console.log(longestValidParentheses("((()()()()(((())"));
