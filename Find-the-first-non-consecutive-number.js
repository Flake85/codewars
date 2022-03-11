// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

function firstNonConsecutive (arr) {
  let start = arr[0]
  for(let x = 0; x < arr.length; x++) {
    if(start !== arr[x]) {
      return arr[x]
    } else {
      start++
    }
  }
  return null
}