// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

var countSheep = function (num){
  let result = []
  for(let x=1; x<= num; x++) {
    result.push(x + " sheep...")
  }
  return result.join("")
}