const secret = (input, key) => {
  let newKey = key % 26; //so that if it goes above 26, it finishes one roation and is back
  let result = null;

  for (let i = 0; i < input.length; i++) {
    let ascii = input.charCodeAt(i) + newKey;
    ascii = ascii <= 122 ? ascii : (ascii % 122) + 96;
    result = result
      ? result + String.fromCharCode(ascii)
      : String.fromCharCode(ascii);
  }

  return result;
};

console.log(secret("zhai", 2));
