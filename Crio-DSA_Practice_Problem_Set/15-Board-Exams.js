/*
Problem Description
N students appeared for the board exams from a class. The answer of each student is a string (a single word). You are assigned the task of checking how many answers are copied. You have to check each consecutive pair of answers (words), to see if they have the same starting character and ending character. This implies a copy. Return the count of such copying.


Input format
First line contains an integer n denoting the number of answers.

Second line contains n space separated answers (Note that each answer is a word)


Output format
An integer representing how many copying instances were found.


Sample Input 1
4

abcd abdd da dd


Sample Output 1
1


Explanation1
The first character of both answer[0] and answer[1] is 'a', and last one is - 'd'. So this is copied.

The first character of words[1] is 'a', but the first character of words[2] is 'd'. So this is not copied.

The last character of words[2] is 'a', but the last character of words[3] is 'd'. So this is not copied.


Constraints
1 <= n <= 1000
*/

function boardExams(n, v) {
  let count = 0;
  for (let i = 0; i <= n - 2; i++) {
    if (
      v[i].split("")[0] === v[i + 1].split("")[0] &&
      v[i][v[i].length - 1] === v[i + 1][v[i + 1].length - 1]
    )
      count++;
  }
  return count;
}

console.log(boardExams(4, ["abcd", "abdd", "da", "dd"]));
