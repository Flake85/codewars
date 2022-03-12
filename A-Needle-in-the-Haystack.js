// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

function findNeedle(haystack) {
  const i = haystack.indexOf('needle') 
  return i === -1 ? "not found" : "found the needle at position " + i
}