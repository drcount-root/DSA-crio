/*

Given a string, find the length of the longest substring that contains at most K distinct characters.

Note:

Uppercase and Lowercase characters should be considered as different characters.

There can be numbers and special characters as well.

Input format
There are 2 lines of input.

First-line contains two space-separated integers representing the value of N and K.

The next line contains the string S of length N.

Output format
The length of the longest substring T that contains at most K distinct characters.

Constraints
1 <= N <= 10^5

0 <= K <= 256

Sample Input 1
5 3

abacd

Sample Output 1
4

Explanation 1
The longest substring that has 3 distinct characters, "abac", is of length 4.

Sample Input 2
6 3

Xyyzya

Sample Output 2
5

Explanation
There are 2 substrings, "Xyyzy" and “yyzya” which are the longest ones having 3 distinct characters and their length is 5.

*/

function lengthOfLongestSubstringKDistinct(s, k) {
  let charCount = {}; // keep track of character count in current window
  let left = 0; // left pointer of the sliding window
  let maxLen = 0; // length of the longest substring with at most K distinct characters

  for (let right = 0; right < s.length; right++) {
    // add the current character to the character count
    charCount[s[right]] = (charCount[s[right]] || 0) + 1;

    // if the number of distinct characters in the current window is greater than K
    while (Object.keys(charCount).length > k) {
      // remove the leftmost character from the character count
      charCount[s[left]]--;
      if (charCount[s[left]] === 0) {
        delete charCount[s[left]];
      }
      left++; // move the left pointer of the window to the right
    }

    // update maxLen if the current window is longer
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(lengthOfLongestSubstringKDistinct("abacd", 3));

console.log(lengthOfLongestSubstringKDistinct("Xyyzya", 3));
