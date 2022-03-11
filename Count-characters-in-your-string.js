// https://www.codewars.com/kata/52efefcbcdf57161d4000091

function count(string) {  
  let countedChars = string.split("").sort().reduce((allChars, char) => {
    if(char in allChars) {
      allChars[char]++
    } else {
      allChars[char] = 1
    }
    return allChars
  }, {})
  return countedChars
}