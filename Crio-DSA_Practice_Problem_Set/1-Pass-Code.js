// Problem Description
// Rohan is playing a game in which he has got two strings, string A and string B. He needs to generate a passcode to qualify for the next level using those strings. The passcode will be in the form of a string. He needs to take the first character of string A and he should add it to the passcode. After that, he needs to take the first character of string B and he should add it to the passcode. Then he needs to take the second character of string A and he should add it to the passcode, and so on.

// He needs to continue the process until there are no letters left in one of either A or B. When this happens, add all the remaining letters of the other string to the passcode. This is the resultant passcode to qualify for the next level, return this.

// Input format
// First line contains string A.

// Second line contains string B

// Output format
// Return a string(passcode).

// Sample Input 1
// aaaaa

// Bbb

// Sample Output 1
// abababaa

// Explanation
// First character is A[0] which is a.

// Second character is B[0] which is b. Second character is A[1] which is a.

// and so on...

// Constraints
// 1<=A.length<=100000

// 1<=B.length<=100000

function passCode(A, B) {
  let pass = "";
  const aStringArray = A.toLowerCase().split("");
  const bStringArray = B.toLowerCase().split("");
  const aLen = aStringArray.length;
  const bLen = bStringArray.length;

  const n = Math.min(aLen, bLen);
  const maxLen = Math.max(aLen, bLen) === aLen ? aStringArray : bStringArray;

  for (let i = 0; i < n; i++) {
    pass += aStringArray[i] + bStringArray[i];
  }
  pass += maxLen.slice(n, Math.max(aLen, bLen));

  return pass.replace(/,/g, "");
}

console.log(passCode("aaaaa", "Bbb"));
