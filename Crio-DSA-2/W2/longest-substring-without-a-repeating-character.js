/*

Given a string, find the length of the longest substring which has no repeating characters.

Input format
Input is a string.

Output format
Output is an integer representing the longest substring with no repeating characters.

Sample Input 1
aabcccbcb

Sample Output 1
3

Explanation 1
"abc" is the longest substring with no repeating characters.

Sample Input 2
cdddddd

Sample Output 2
2

Explanation 2
"cd" is the longest substring with no repeating characters.

*/

function findLongestSubstring(str) {
  let seen = new Set();
  let left = 0;
  let maxLength = 0;

  for(let right = 0; right < str.length; right++) {
    let currentChar = str[right];

    // If the current character is already in the set, shrink the window
    while (seen.has(currentChar)) {
      seen.delete(str[left]);
      left++;
    }

    // Otherwise, add the character to the set and update maxLength if necessary
    seen.add(currentChar);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(findLongestSubstring("aabcccbcb"));

console.log(findLongestSubstring("cdddddd"));
