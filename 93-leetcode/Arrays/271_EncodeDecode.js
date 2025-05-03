const encode = (strs) => {
  if (strs.length === 0) return;
  let result = "";
  for (const str of strs) {
    result += str.length + "#" + str;
  }
  return result;
};

/**
 * @param {string} str
 * @returns {string[]}
 */
const decode = (str) => {
  let result = [];
  if (str.length === 0) return;

  let left = 0;
  let right = 0;
  while (right < str.length) {
    if (str[right] === "#") {
      const start = right + 1;
      const end = right + parseInt(str.slice(left, right)) + 1;
      let word = str.slice(start, end);
      result.push(word);
      left = end;
      right = left;
    }
    right++;
  }

  return result;
};

//console.log(encode(["we", "say", ":", "yes", "sachintendulkar"]));
const str = encode(["we", "say", ":", "yes", "sachintendulkar"]);
console.log(str);
console.log(decode(str));
