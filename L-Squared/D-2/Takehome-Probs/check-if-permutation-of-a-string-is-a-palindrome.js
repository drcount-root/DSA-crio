/*

Given a string S which consists of both lowercase and uppercase alphabetical letters, you have to write a function to check if string S is a permutation of a palindrome or not. Note: Characters are case sensitive i.e. ‘a’ is not the same as ‘A’.

Input format
First line contains an integer representing the value of T, the number of test cases.

In next T lines each line contains the string S.

Output format
For each test case, print "True"(without quotes) if it is a permutation of a palindrome and "False" otherwise.

Constraints
1 <= T <= 10

1 <= length(S) <= 100000

Sample Input 1
3

nnaamm

hello

Aab

Sample Output 1
True

False

False

Explanation 1
nnaamm is a permutation of namman, which is a palindrome

hello is not a permutation of any palindrome

Aab is not a permutation of any palindrome

*/

function isPermutationPalidrome(s) {
  const len = s.length;
  const frq = {};

  for (let i = 0; i < len; i++) {
    if (frq[s[i]]) frq[s[i]]++;
    else frq[s[i]] = 1;
  }

  let keys = Object.keys(frq);
  let odd_count = 0;

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (frq[key] % 2) {
      odd_count++;
    }
  }

  if (len % 2 === 0) return odd_count === 0;

  return odd_count === 1;
}

console.log(isPermutationPalidrome("nnaamm"));

console.log(isPermutationPalidrome("hello"));

console.log(isPermutationPalidrome("Aab"));
