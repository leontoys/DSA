var largestAltitude = function (gain) {
  let maxAlt = 0;
  let alt = new Array(gain.length + 1);
  alt[0] = 0;
  for (let i = 0; i < gain.length; i++) {
    alt[i + 1] = gain[i] + alt[i];
    maxAlt = Math.max(alt[i + 1], maxAlt);
  }
  return maxAlt;
};

let arr = [-5, 1, 5, 0, -7];
console.log(largestAltitude(arr));
