/*

You are given two strings, a main string S, and a pattern P. You have to find the starting indices of the anagrams of P in S.


Anagrams are permutations of a string. For P="abc”, its anagrams are abc,acb,bca,bac,cba,cab.


Note that indexing starts at 0.

Input format
There is one line of input, containing two space-separated strings S and P.

Output format
First-line should contain the number of such starting indices.

Next line should contain the indices in increasing order separated by a space.

Sample Input 1
aaba ab

Sample Output 1
2

1 2

Explanation 1
The anagrams of pattern "ab" are “ab” and “ba”. These are present at indices 1 and 2 of the input string “aaba”.

Sample Input 2
bacdgabcda abcd

Sample Output 2
3

0 5 6

Explanation 2
The anagrams of "abcd" can be seen as “bacd” at index 0, “abcd” at index 5 and “bcda” at index 6.

Constraints
1 <= length(S), length(P) <= 10^6

*/

function findAnagrams(S, P) {
  const sLen = S.length;
  const pLen = P.length;
  const pCounts = new Array(26).fill(0);
  const result = [];
  let windowStart = 0;
  let windowEnd = 0;

  // Count characters in pattern P
  for (let i = 0; i < pLen; i++) {
    pCounts[P.charCodeAt(i) - 97]++;
  }

  // Slide window over string S
  while (windowEnd < sLen) {
    // Expand window
    const charCode = S.charCodeAt(windowEnd) - 97;
    pCounts[charCode]--;
    windowEnd++;

    // Check if anagram found
    if (windowEnd - windowStart === pLen) {
      if (pCounts.every((count) => count === 0)) {
        result.push(windowStart);
      }
      pCounts[S.charCodeAt(windowStart) - 97]++;
      windowStart++;
    }
  }

  return result;
}

console.log(findAnagrams("bacdgabcda", "abcd"));
