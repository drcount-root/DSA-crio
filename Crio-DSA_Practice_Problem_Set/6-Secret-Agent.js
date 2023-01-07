/*
Problem Description
Rahul works as a secret agent. He wants to send a message to his teammates and at the same time he doesn’t want anyone else to understand his message, except his teammates.

So, he decided to reverse all the words in the message which have an odd length. Print the final message which he will be sending to his teammates.


Input format
Input message string


Output format
Print the string with all odd length words reversed


Sample Input 1
One Two three Four


Sample Output 1
enO owT eerht Four


Explanation
One is of odd length, so reverse it.

Two is of odd length, so reverse it.

three is of odd length, so reverse it.

Four is of even length, so don't reverse it.


Constraints
1<=message.length<=100.
*/

function secretAgentII(s) {
  const arr = s.split(" ");
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].length % 2 !== 0
      ? ans.push(arr[i].split("").reverse().join(""))
      : ans.push(arr[i]);
  }
  const result = ans.toString().replace(/,/g, " ");
  return result;
}

console.log(secretAgentII("One Two three Four"));
