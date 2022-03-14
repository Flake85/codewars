// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number){
  let arr = []
  for(let x = 0; x < number; x++) {
    if(x % 3 == 0 || x % 5 == 0) {
      arr.push(x)
    }
  }
  return arr.reduce((a, b) => {
    return a + b
  }, 0)
}