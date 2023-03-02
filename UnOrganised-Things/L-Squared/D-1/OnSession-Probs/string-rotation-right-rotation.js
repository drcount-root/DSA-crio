/*

You are given a string 'str' and an integer 'D'. Your task is to rotate the given string right(clockwise) by 'D' units from the starting index. You are required to return the rotated string.

Input format
First line contains a string str. Second line contains an integer D.

Output format
Return the rotated string.

Sample Input 1
learnbydoing 3

Sample Output 1
inglearnbydo

Explanation
In the right rotation, the substring of length 'D' = 3 from the end is "ing", this substring is removed from the end and attached to the beginning of the string(i.e. clockwise).

Constraints
1 <= |str| <= 10^5 1 <= D <= 10^5

*/

function rightRotation(str, D) {
  const n = str.length;
  const rotationsFromLeft = (n - (D % n)) % n;

  let rotatedString = "";
  for (let i = n - 1; i >= 0; i--) {
    const rotatedIndex = (i + rotationsFromLeft) % n;
    rotatedString = str[rotatedIndex] + rotatedString;
  }

  return rotatedString;
}

console.log(rightRotation("learnbydoing", 5));
