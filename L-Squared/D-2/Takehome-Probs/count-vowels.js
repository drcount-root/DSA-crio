/*

Given a string, count the total number of vowels present in that string.

Input format
First line contains the given string.

Output format
Print the total number of vowels.

Sample Input 1
language

Sample Output 1
4

Explanation
There are total 4 vowels in the string "language" i.e. 'a', 'u', 'a', 'e'.

Constraints
0 < Length of string < 100

*/

function countVowels(str) {
  const isVowel = (ch) => {
    return ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u";
  };

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i].toLowerCase())) ++count;
  }

  return count;
}

console.log(countVowels("language"));
console.log(countVowels("aglet"));
console.log(countVowels("alphabet"));
