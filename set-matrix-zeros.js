var setZeroes = function(matrix) {
    const firstRowHasZero = matrix[0].includes(0);

    // Start from 2nd row
    for(let row = 1; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col++){
            if(matrix[row][col] === 0){
                matrix[0][col] = 0;
                matrix[row][0] = 0;
            }
        }
    }


    // Look at 1st row in the matrix, update each row
    for(let row = 1; row < matrix.length; row++){
        if(matrix[row][0] === 0){
            matrix[row] = Array(matrix[0].length).fill(0);
        }
    }

    // Look at 1st column in the matrix, update each cell in the matrix
    for(let row = 1; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col++){
            if(matrix[0][col] === 0){
                matrix[row][col] = 0;
            }
        }
    }

    if(firstRowHasZero) {
        matrix[0] = Array(matrix[0].length).fill(0);
    }

    return matrix;
}

console.log(setZeroes([[1, 5, 0], [2, 9, 8], [0, 6, 2]]));