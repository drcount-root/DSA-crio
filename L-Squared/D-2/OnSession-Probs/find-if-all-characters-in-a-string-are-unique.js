/*

Given a string S, implement an algorithm to determine if a string has all unique characters.

Input format
A single line that contains the string S.

Output format
Print "Yes"(without quotes) if S has all unique characters "No"(without quotes) otherwise.

Sample Input 1
abcd

Sample Output 1
Yes

Explanation 1
All characters in "abcd" are unique.

Sample Input 2
abca

Sample Output 2
No

Explanation 2
All characters in "abca" are not unique, character 'a' repeats two times.

Constraints
1 <= length(S) <= 100000

S contains only english alphabetic characters.

*/

function isUnique(s) {
  const seenCharacters = new Set();
  for (let i = 0; i < s.length; i++) {
    if (seenCharacters.has(s[i])) return false;
    seenCharacters.add(s[i]);
  }

  return true;
}

console.log(isUnique("abcd"));
console.log(isUnique("abca"));
