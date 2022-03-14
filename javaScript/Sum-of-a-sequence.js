// https://www.codewars.com/kata/586f6741c66d18c22800010a

const sequenceSum = (begin, end, step) => {
  let result = []
  for(let x = begin; x <= end; x += step) result.push(x) 
  return !result.length ? 0 : result.reduce((a, b) => a+b)
};