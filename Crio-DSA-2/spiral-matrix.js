/*

Problem Description
Given an integer A, generate a square matrix filled with elements from 1 to A*A in spiral order. The spiral order will be clockwise in nature starting from (0,0)

Input format
One line of input, containing a single integer A.

Output format
Print a 2-d matrix of size A x A satisfying the spiral order.

Sample Input 1:

3

Sample Output 1:

1 2 3

8 9 4

7 6 5

Explanation
As you can see the matrix goes spirally with each next position incremented by one.

Constraints
1<=A<=1000

*/

function spiralMatrixII(n) {
    
    // empty array
    const answer = [];

    // creates empty arrays inside answer array
    for(let i=0; i<n; i++){
        answer.push([]);
    }

    let count = 1;
    let firstCol = 0;
    let lastCol = n - 1;
    let firstRow = 0;
    let lastRow = n - 1;

    while(firstCol <= lastCol && firstRow <= lastRow){
        // printing first row : row constant, only column changes
        for(let i = firstCol; i<= lastCol; i++){
            answer[firstRow][i] = count;
            count++;
        }
        firstRow++;

        // printing last col : col constant, only row changes
        for(let i = firstRow; i <= lastRow; i++){
            answer[i][lastCol] = count;
            count++;
        }
        lastCol--;

        // printing last row : row constant, only column changes
        for(let i = lastCol; i >= firstCol; i--){
            answer[lastRow][i] = count;
            count++;
        }
        lastRow--;

        // printing first col : col constant, only row changes
        for(let i = lastRow; i>= firstRow; i--){
            answer[i][firstCol] = count;
            count++;
        }
        firstCol++;
    }

    return answer;

}

console.log(spiralMatrixII(3))