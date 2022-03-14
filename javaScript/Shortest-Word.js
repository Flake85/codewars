// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s){
  const splitArr = s.split(" ")
  return splitArr.reduce((a, b) => a.length <= b.length ? a : b ).length
}