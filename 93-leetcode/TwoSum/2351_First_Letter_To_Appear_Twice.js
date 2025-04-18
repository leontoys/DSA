/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  let stringhash = {};
  for (let i = 0; i < s.length; i++) {
    if (stringhash[s[i]]) {
      return s[i];
    } else {
      stringhash[s[i]] = true;
    }
  }
};
