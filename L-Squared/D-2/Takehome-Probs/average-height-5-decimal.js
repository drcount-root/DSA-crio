/*

There are n students in a class. You are given the heights of the students, you have to calculate the average height of students in the class. Your answer should be accurate upto 5 decimal places.

Input format
First line contains an integer n - Number of students. Second line contains n space-separated real numbers - The heights array.

Output format
Print the average height.

Sample Input 1
6 2.2 1 3 1.9 2.4 1.7

Sample Output 1
2.033333

Explanation
(2.2+1+3+1.9+2.4+1.7) / 6 = 12.2/6 = 2.03333

Constraints
0 < n < 100 0 < height < 100

*/

function averageHeight(n, arr) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += arr[i];
  }

  const avg = total / n;

  // round to 5 decimal places
  const final = Math.round(avg * 100000) / 100000;

  return final;
}

console.log(averageHeight(6, [2.2, 1, 3, 1.9, 2.4, 1.7]));
// 2.03333

console.log(averageHeight(3, [5.4, 7.2, 9.7]));
// 7.43333
