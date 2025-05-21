/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let left = 0;
  let right = m * n - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    rowIndex = Math.floor(mid / n);
    colIndex = Math.floor(mid % n);
    if (target > matrix[rowIndex][colIndex]) left = mid + 1;
    else if (target < matrix[rowIndex][colIndex]) right = mid - 1;
    else return true;
  }
  return false;
};

let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target = 13;
console.log(searchMatrix(matrix, target));
matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
target = 3;
console.log(searchMatrix(matrix, target));
matrix = [[1]];
target = 0;
console.log(searchMatrix(matrix, target));
