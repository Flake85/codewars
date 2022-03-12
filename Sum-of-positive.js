// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  return arr.length >= 1 ? arr.filter((n) => { return n >= 0; }).reduce((a,b) => { return a + b }, 0) : 0
}