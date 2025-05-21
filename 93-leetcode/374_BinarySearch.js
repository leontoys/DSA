/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
let pick = 6;
var guess = function (num) {
  if (num > pick) return -1;
  else if (num < pick) return 1;
  else return 0;
};

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1;
  let right = n;
  while (left <= right) {
    let middle = Math.floor((right + left) / 2);
    let result = guess(middle);
    if (result === -1) right = middle - 1;
    else if (result === 1) left = middle + 1;
    else return middle;
  }
};

console.log(guessNumber(10));
