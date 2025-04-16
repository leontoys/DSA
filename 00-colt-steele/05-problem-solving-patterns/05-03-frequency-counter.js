//given two arrays, check if they contain the same elements squared in the same frequency

const same = (arr1, arr2) => {
  //first check if the length of the two arrays are the same
  if (arr1.length !== arr2.length) {
    return false;
  }
  //then create objects with frequency counter
  let counter1 = {};
  for (const element of arr1) {
    counter1[element] = counter1[element] ? counter1[element] + 1 : 1;
  }
  let counter2 = {};
  for (const element of arr2) {
    counter2[element] = counter2[element] ? counter2[element] + 1 : 1;
  }
  console.log(counter1);
  console.log(counter2);
  //loop through first object
  for (const element of Object.keys(counter1)) {
    console.log(element);
    //square it and check if it exits
    if (!counter2[element * element]) {
      return false;
    }
    // compare the count
    if (!counter1[element] === counter2[element * element]) {
      return false;
    }
  }
  return true;
};

console.log(same([1, 2, 2, 3, 3, 3], [1, 4, 4, 9, 9, 9]));
console.log(same([1, 2, 2, 3, 3, 3, 5], [1, 4, 4, 9, 9, 9, 9]));
