/*
Problem Description
Your team participated in a coding competition named Code To Win. You are good at coding and your teammate is good at maths. Together, you form a great team that has the potential to win this competition. The first question is as follows.


You are given a rectangular matrix of size n x m and also an integer size. Calculate the sum of all numbers within each size × size submatrix. Determine the maximum of all these sums. Let that be maxSum. From all size × size submatrices having the sum of maxSum, find all distinct numbers that appear in at least one of them. Return the sum of these distinct numbers.


Input format
First line contains two space separated integers n and m.

Next n lines contain m integers each representing the matrix.

The next line contains a single integer size.


Output format
Return a single integer.


Sample Input 1
4 5

1 0 1 5 6

3 3 0 3 3

2 9 2 1 2

0 2 4 2 0

2


Sample Output 1
29


Explanation
Considering all the 2 × 2 square submatrices in the matrix, there are 3 of them with the maximum sum of 17.

5 6

3 3

Total sum = 17

3 3

2 9

Total sum = 17

9 2

2 4

Total sum = 17

Among these 3 submatrices, which each have the maximum sum, the only distinct numbers are 2, 3, 4, 5, 6, and 9. So the answer is 2 + 3 + 4 + 5 + 6 + 9 = 29.


Constraints
1 <= n, m <= 100

1<= size <= min(n, m)
*/

function isValidMatrix(x, y, n, m) {
  return x < n && y < m;
}
function codeToWin(n, m, v, k) {
  let set = new Set();
  let maxSum = -Infinity;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let sum = 0;
      let set2 = new Set();

      let x1 = i,
        y1 = j;
      let x2 = i + k - 1,
        y2 = j + k - 1;

      if (isValidMatrix(x1, y1, n, m) && isValidMatrix(x2, y2, n, m)) {
        for (let x = x1; x <= x2; x++) {
          for (let y = y1; y <= y2; y++) {
            sum += v[x][y];
            set2.add(v[x][y]);
          }
        }

        if (sum == maxSum) {
          set = new Set([...set, ...set2]);
        }

        if (sum > maxSum) {
          maxSum = sum;
          set = set2;
        }
      }
    }
  }

  const arr = [...set];

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(
  codeToWin(
    4,
    5,
    [
      [1, 0, 1, 5, 6],

      [3, 3, 0, 3, 3],

      [2, 9, 2, 1, 2],

      [0, 2, 4, 2, 0],
    ],
    2
  )
);
