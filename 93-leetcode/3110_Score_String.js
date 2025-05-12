/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  let sum = 0;
  for (let i = 1; i < s.length; i++) {
    let difference = s.charCodeAt(i) - s.charCodeAt(i - 1);
    difference = difference < 0 ? difference * -1 : difference;
    sum += difference;
  }
  return sum;
};
