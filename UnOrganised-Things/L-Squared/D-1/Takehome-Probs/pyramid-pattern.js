// let n = 5;

// const result = [];

// for (let i = 1; i <= n; i++) {
//   result[i - 1] = "*".repeat(i) + " ".repeat(n - i);
// }

// console.log(result);

let n = 5;
let result = [];

for (let i = 1; i <= n; i++) {
  let row = "";

  // Generate the asterisks for the row using string concatenation
  for (let j = 1; j <= i; j++) {
    row += "*";
  }

  // Add the spaces to the end of the row
  for (let j = i; j < n; j++) {
    row += " ";
  }

  result.push(row);
}

console.log(result);

//
//
//

// function patternPrintingI(n) {
//   const res = [];
//   for(let i = 1; i <= n; i++){
//       let row = "";

//       // '*'
//       for(let j = 1; j <= i; j++){
//           row += "* ";
//       }

//       // ' '
//       // for(let j = i; j < n; j++){
//       //     row += " ";
//       // }

//       res.push(row);
//   }
//   return res;
// }