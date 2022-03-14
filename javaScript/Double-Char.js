// https://www.codewars.com/kata/56b1f01c247c01db92000076

function doubleChar(str) {
  return Array.prototype.map.call(str, eachLetter => {
    return `${eachLetter}${eachLetter}`
  }).join("")
}