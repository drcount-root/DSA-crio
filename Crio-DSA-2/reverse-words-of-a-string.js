/*
Problem Description
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words.

The returned string should only have a single space separating the words.

Do not include any extra spaces.

Input format
String s.

Output format
The function should return a string of the words in reverse order concatenated by a single space.

Sample Input 1
hello world

Sample Output 1
world hello

Explanation
The given words after being reversed gives:world hello

Your reversed string should not contain leading or trailing spaces.

Constraints
1 <= s.length <= 10^5

s contains English letters (upper-case and lower-case), digits, and spaces ' '.

There is at least one word in s.
*/

const reverseWords = function (str) {

  let left = 0;
  let right = str.length - 1;
  let temp = "";
  let ans = "";

  while (left <= right) {

    let ch = str[left];

    if (ch != " ") {
      temp += ch;
    } else if (ch == " ") {
      if (temp != "") {
        if (ans != "") {
          ans = temp + " " + ans;
          temp = "";
        } else {
          ans = temp;
          temp = "";
        }
      }
    }
    left++;
  }

  if (temp != "") {
    if (ans != "") {
      ans = temp + " " + ans;
    } else {
      ans = temp;
    }
  }

  return ans;
};

console.log(reverseWords("    world  hello    "));
