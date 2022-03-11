// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

function invert(array) {
  let invert = [];
  array.forEach((a,i) => a == 0 ? invert.push(-0) : invert.push(array[i] = -array[i]))
  return invert
}