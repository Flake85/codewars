// https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
  return str.replace(/[\n]+/g, "\n").replace(/[aeiouAEIOU]+/g, "")
}