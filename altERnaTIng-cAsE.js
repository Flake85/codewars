// https://www.codewars.com/kata/56efc695740d30f963000557

String.prototype.toAlternatingCase = function () {
  return Array.prototype.map.call(this, eachLetter => eachLetter.match(/[a-z]/g) ? eachLetter.toUpperCase() : eachLetter.match(/[A-Z]/g) ? eachLetter.toLowerCase() : eachLetter).join("")
}