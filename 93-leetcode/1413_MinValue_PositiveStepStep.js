/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let startValue = 1;
  let cumSum = 1;
  for (const num of nums) {
    cumSum += num;
    if (cumSum <= 0) {
      startValue += 1 + (0 - cumSum);
      cumSum = 1;
    }
  }

  return startValue;
};
