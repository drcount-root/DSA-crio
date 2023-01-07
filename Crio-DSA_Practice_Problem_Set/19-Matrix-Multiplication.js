/*
Problem Description
You are given two matrices grid1 and grid2. You must multiply the matrices and return the result.

Refer to https://www.mathsisfun.com/algebra/matrix-multiplying.html for matrix multiplication basics.

Note: The number of columns in the first matrix will always be equal to the number of rows in the second matrix.


Input format
The input consists of the dimensions of the first matrix, followed by the values in that matrix. The values are input by the rows of the matrix. The same input format is used for the second matrix.


Output format
The output format is a product of the two input matrices.


Sample Input
2 2

1 4

5 9

2 5

1 2 8 8 4

3 3 6 5 2


Sample Output
13 14 32 28 12

32 37 94 85 38


Explanation
The first matrix is a 2 x 2 matrix and the second matrix is a 2 x 5 matrix. Following the matrix multiplication rules, we get the resultant matrix which has the size 2 x 5.


Constraints
0 < n1,m1,n2,m2 < 10 -> number of rows and columns are in this range

0 < grid1[n1][m1] < 10000 -> values stored in the first matrix are in this range

0 < grid2[n2][m2] < 10000 -> values stored in the second matrix are in this range

The number of columns in the first matrix must be equal to the number of rows in the second matrix.
*/

function matrixMultiplication(n1, m1, n2, m2, grid1, grid2) {
  let m = new Array(n1);
  for (let r = 0; r < n1; ++r) {
    m[r] = new Array(m2);
    for (let c = 0; c < m2; ++c) {
      m[r][c] = 0;
      for (let i = 0; i < m1; ++i) {
        m[r][c] += grid1[r][i] * grid2[i][c];
      }
    }
  }
  return m;
}

console.log(
  matrixMultiplication(
    2,
    2,
    2,
    5,
    [
      [1, 4],
      [5, 9],
    ],
    [
      [1, 2, 8, 8, 4],
      [3, 3, 6, 5, 2],
    ]
  )
);
