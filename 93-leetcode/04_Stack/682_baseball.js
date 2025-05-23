/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let record = [];
  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "C":
        record.pop();
        break;
      case "D":
        record.push(record[record.length - 1] * 2);
        break;
      case "+":
        record.push(record[record.length - 1] + record[record.length - 2]);
        break;
      default:
        record.push(parseInt(operations[i]));
        break;
    }
  }
  let sum = 0;
  console.log(record);
  for (const num of record) {
    sum += num;
  }
  return sum;
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
console.log(calPoints(["1", "C"]));
