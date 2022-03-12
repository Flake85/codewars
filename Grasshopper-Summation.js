// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

var summation = function (num) {
  arr = [];
  for(let x = 0; x <= num; x++) {
    arr.push(x)
  }
  return arr.reduce((a, b) => a + b )
}