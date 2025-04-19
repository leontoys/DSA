/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let profit = 0;

  while (right < prices.length) {
    if (prices[right] > prices[left]) {
      //compare if this is greater than the current maximum profit
      profit =
        prices[right] - prices[left] > profit
          ? prices[right] - prices[left]
          : profit;
    } else {
      //otherwise we can't do the selling
      //so move left rightwards
      left = right;
    }
    //keep moving right
    right++;
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
