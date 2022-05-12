// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const matrixArr = [];
  for(let i = 0; i < n; i++){
    matrixArr.push([])
  }

  let rowStart = 0;
  let columnStart = 0;
  let columnEnd = n - 1;
  let rowEnd = n - 1;

  for (let i = 1; i <= (n * n);){
    for(let column = columnStart; column <= columnEnd; column++){
      matrixArr[rowStart][column] = i;
      i++
    }
    rowStart++;
    for(let row = rowStart; row <= rowEnd; row++){
      matrixArr[row][columnEnd] = i;
      i++
    }
    columnEnd--;
    for(let column = columnEnd; column >= columnStart; column--){
      matrixArr[rowEnd][column] = i;
      i++
    }
    rowEnd--;
    for(let row = rowEnd; row >= rowStart; row--){
      matrixArr[row][columnStart] = i;
      i++
    };
    columnStart++;
  }

  return matrixArr
}

matrix(2);
matrix(3);
matrix(4);


module.exports = matrix;
