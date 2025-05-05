var maxScore = function (s) {
  let max = 0;
  let leftSum = 0;
  let leftMap = {};
  for (let i = 0; i < s.length; i++) {
    leftSum += s[i] === "0" ? 1 : 0;
    leftMap[i] = leftSum;
  }
  let rightSum = 0;
  let rightMap = {};
  for (let i = s.length - 1; i >= 0; i--) {
    rightSum += s[i] === "1" ? 1 : 0;
    rightMap[i] = rightSum;
  }
  for (let i = 0; i < s.length - 1; i++) {
    let sum = leftMap[i] + rightMap[i + 1];
    max = Math.max(max, sum);
  }
  return max;
};

console.log(maxScore("011101"));
console.log(maxScore("00"));
