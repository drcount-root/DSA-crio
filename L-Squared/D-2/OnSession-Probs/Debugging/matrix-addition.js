// function additionOfMatrix(matrix1, matrix2) {
//   let n = matrix1.length;
//   let m = matrix1[0].length;

//   let ans = new Array(n);
//   for (let k = 0; k < n; k++) {
//     ans[k] = new Array(m);
//   }

//   for (let i = 0; i < n; i++) {
//     //row
//     for (let j = 0; j < m; j++) {
//       //col
//       ans[i][j] = matrix1[i][j] + matrix2[i][j];
//     }
//   }
//   return ans;
// }

// console.log(
//   additionOfMatrix(
//     [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//     ],
//     [
//       [10, 11, 12],
//       [13, 14, 15],
//       [16, 17, 18],
//     ]
//   )
// );

//
//
//
//
//
//
// //////////    OR    //////////
//
//
//
//
//
//

function additionOfMatrix(matrixOne, matrixTwo, n, m) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      matrixOne[i][j] += matrixTwo[i][j];
    }
  }
  return matrixOne;
}

console.log(
  additionOfMatrix(
    [
      [1, 2],
      [3, 4],
    ],
    [
      [1, 1],
      [1, 1],
    ],
    2,
    2
  )
);