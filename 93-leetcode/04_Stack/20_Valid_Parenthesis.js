/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let last = stack.pop();
    if (
      (s[i] === "}" && last === "{") ||
      (s[i] === "]" && last === "[") ||
      (s[i] === ")" && last === "(")
    ) {
      continue;
    } else {
      if (last) stack.push(last);
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};

let s = "([)]";
console.log(isValid(s));
