/*
Problem Description
Your younger brother is ready to get admission into school and needs to take a test. The test focuses on simple English and Maths. To prepare your brother, you give this problem.

You will be given a string containing words in the wrong order and without any spaces. Instead of a space to separate two words, there will be a number in place of the space. This number also indicates the position of the word in the final sentence. You have to rearrange the words based on the numbers and form the sentence. See sample input for clear understanding.


Input format
First and only line contains a single string (s). s contains only lower case letters and numbers from 1 to 9.


Output format
Return a single string representing the answer.


Sample Input 1
my1kiran4name2is3


Sample Output 1
my name is kiran


Explanation1
my - 1

kiran - 4

name - 2

is - 3

Arrange the words based on the numbers

So the output is "my name is kiran"


Constraints
1 <= |s| <= 100
*/

function schoolAdmission(s) {
  let nums = "123456789";

  function checks(x) {
    return nums.includes(x) ? true : false;
  }

  let matches = [...s].reduce((x, y) => (checks(y) ? x + y : x), "");
  // console.log([...matches]);

  let onlyChars = s.replace(/[0-9]/g, " ").trim().split(" ");
  // console.log(onlyChars);

  let reslut = [];

  for (let i = 0; i < matches.length; i++) {
    reslut[matches[i] - 1] = onlyChars[i];
  }

  return reslut.join(" ");
}

console.log(schoolAdmission("my1kiran4name2is3"));
