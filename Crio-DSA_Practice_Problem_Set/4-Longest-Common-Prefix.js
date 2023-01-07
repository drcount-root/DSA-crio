/*
Problem Description
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Input format
You ‘ll be given space-separated strings.

Output format
Output the longest common prefix amongst the array of strings. If there is no common prefix, return an empty string "".

Sample Input 1
flower flow flight

Sample Output 1
fl

Explanation 1
fl is common in all three strings

Sample Input 2
dog racecar car

Sample Output 2
""

Explanation 2
There is no common prefix.Print an empty string
*/

function longestCommonPrefix(strs) {
  if (!strs[0] || strs.length == 1) return strs[0] || "";
  let i = 0;
  while (strs.every((item) => strs[0][i] === item[i])) {
    i++;
  }
  return strs[0].slice(0, i);
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
