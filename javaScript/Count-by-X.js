// https://www.codewars.com/kata/5513795bd3fafb56c200049e

function countBy(x, n) {
  let sum = x
  let result = []
  result.push(sum)
  for(let i = 1; i < n; i++) {
    result.push(sum += x)
  }
  return result
}