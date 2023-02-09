function rotateImage(n, matrix) {
    for(let x = 0; x < Math.trunc(n/2); x++){
        for(let y = x; y < n - x - 1; y++){
            let temp = matrix[x][y];
            matrix[x][y] = matrix[n-1-y][x];
            matrix[n-1-y][x] = matrix[n-1-x][n-1-y];
            matrix[n-1-x][n-1-y] = matrix[y][n-1-x];
            matrix[y][n-1-x] = temp;
        }
    }
    return matrix;
}

console.log(rotateImage(3, [[1,2,3],[4,5,6],[7,8,9]]));