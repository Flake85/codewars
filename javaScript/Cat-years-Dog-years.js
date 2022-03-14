// https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

var humanYearsCatYearsDogYears = function(humanYears) {
  let result = []
  let tempYears = 0
  let catYears = 0
  let dogYears = 0
 
  // Human Years
  result.push(humanYears)
  
  // Cat Years
  tempYears = humanYears
  if(tempYears >= 1) {
    catYears += 15
    tempYears--
  }
  if(tempYears >= 1) {
    catYears += 9
    tempYears--
  }
  if(tempYears >= 1) {
    catYears += (tempYears * 4)
  }
  result.push(catYears)
  
  // Dog Years
  tempYears = humanYears
  if(tempYears >= 1) {
    dogYears += 15
    tempYears--
  }
  if(tempYears >= 1) {
    dogYears += 9
    tempYears--
  }
  if(tempYears >= 1) {
    dogYears += (tempYears * 5)
  }
  result.push(dogYears)
  
  return result
}