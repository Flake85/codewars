// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = n => {
  let result = []
  for(let x = n; x > 0; x--) {
    result.push(x)
  }
  return result
};