const count = (word) => {
  let result = "";
  let prev = word[0];
  let count = 1;
  for (let i = 1; i < word.length; i++) {
    if (word[i] === prev) {
      count++;
    } else {
      result += prev + count;
      count = 1;
      prev = word[i];
    }
    if (i === word.length - 1) {
      //last
      result += word[i] + count;
    }
  }
  return result;
};

console.log(count("aaabbcd"));
