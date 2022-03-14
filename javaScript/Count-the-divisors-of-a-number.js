// https://www.codewars.com/kata/542c0f198e077084c0000c2e

function getDivisorsCnt(n){
  let arr = []
  for(let x = n; x >= 1; x--) {
    arr.push(x)
  }
  return arr.filter(a => n%a == 0).length
}