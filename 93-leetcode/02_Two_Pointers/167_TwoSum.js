/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let hashMap = {};
  for (let i = 0; i < numbers.length; i++) {
    let difference = target - numbers[i];
    if (hashMap[difference]) {
      return [hashMap[difference], i + 1];
    }
    hashMap[numbers[i]] = i + 1;
  }
};
