/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;
  let count = 0;
  while (left <= right) {
    let remain = limit - people[right];
    right--;
    count++;
    if (left <= right && remain >= people[left]) {
      left++;
    }
  }
  return count;
};
