const validAnagram = (string1, string2) => {
  //check length first
  if (string1.length !== string2.length) {
    return false;
  }
  //create frequency counters
  let frequencyCounter1 = {};
  for (const letter of string1) {
    frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
  }
  let frequencyCounter2 = {};
  for (const letter of string2) {
    frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
  }
  //now compare
  for (const letter in frequencyCounter1) {
    //check if letter in second
    if (!letter in frequencyCounter2) {
      return false;
    }
    if (frequencyCounter1[letter] !== frequencyCounter2[letter]) {
      return false;
    }
  }
  //if all good
  return true;
};
/**Another way is to subtract 1 as we loop through each letter in second string */

console.log(validAnagram("iceman", "cinema"));
console.log(validAnagram("rat", "car"));
