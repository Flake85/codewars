// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
  let count = 0;
  let sum = 0 
  if(input) {
    input.forEach(n => n > 0 ? count++ : sum += n)
  }
  return count === 0 && sum === 0 ? [] : [count, sum]
}