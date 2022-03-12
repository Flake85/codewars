// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

function repeatStr (n, s) {
  let result = []
  for(let x=0;x<n;x++) {
    result.push(s)
  }
  return result.join("")
}