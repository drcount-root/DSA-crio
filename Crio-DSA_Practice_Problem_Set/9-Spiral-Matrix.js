/*
Problem Description
Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in spiral order.

Input format
First line contains two space separated integers M and N, representing the number of rows and columns in the matrix, respectively.

Next M lines contain N space separated integers each, which represent the values on each row

Output format
On line containing M*N space separated integers, representing the spiral form of the given matrix.

Constraints
0 <= M,N <= 100

1 <= Matrix[i] <= 100000

Sample Input 1
3 3

1 2 3

4 5 6

7 8 9

Sample Output 1
1 2 3 6 9 8 7 4 5

Explanation 1
Start with the first row then last column then the last row and so on, in the spiral form as required.

Sample Input 2
3 4

1 2 3 4

5 6 7 8

9 10 11 12

Sample Output 2
1 2 3 4 8 12 11 10 9 5 6 7

Explanation 2
Start with the first row then last column then the last row and so on, in the spiral form as required.
*/

function SpiralMatrix(matrix) {
  let spiralArray = [];
  if (matrix.length === 0) {
    return spiralArray;
  }
  let rowBegin = 0;
  let rowEnd = matrix.length - 1;
  let colBegin = 0;
  let colEnd = matrix[0].length - 1;

  while (colBegin <= colEnd && rowBegin <= rowEnd) {
    for (let i = colBegin; i <= colEnd; i++) {
      spiralArray.push(matrix[rowBegin][i]);
    }
    rowBegin++;
    for (let i = rowBegin; i <= rowEnd; i++) {
      spiralArray.push(matrix[i][colEnd]);
    }
    colEnd--;
    if (rowBegin <= rowEnd) {
      for (let i = colEnd; i >= colBegin; i--) {
        spiralArray.push(matrix[rowEnd][i]);
      }
    }
    rowEnd--;
    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        spiralArray.push(matrix[i][colBegin]);
      }
    }
    colBegin++;
  }
  return spiralArray;
}

console.log(
  SpiralMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);

console.log(
  SpiralMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
