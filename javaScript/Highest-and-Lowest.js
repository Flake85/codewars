// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers){
  var sorted = numbers.split(" ").sort((a, b) => a-b)
  return sorted[sorted.length - 1] + " " + sorted[0]
}