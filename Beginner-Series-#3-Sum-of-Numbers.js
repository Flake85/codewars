// https://www.codewars.com/kata/55f2b110f61eb01779000053

function getSum( a,b ) {
  let result = []
  
  for(let x = Array.from(arguments).sort((a,b) => a - b)[0]; x <= Array.from(arguments).sort((a,b) => a - b)[1]; x++) {
    result.push(x)
  }
  return result.reduce((a, b) => a+b)
}