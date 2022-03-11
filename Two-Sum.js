// https://www.codewars.com/kata/52c31f8e6605bcc646000082

function twoSum(numbers, target) {
  for(let x = 0; x < numbers.length; x++) {
    for(let y = 1; y < numbers.length; y++) {
      if(numbers[x] + numbers[y] === target) {
        return [x, y]
      }
    }
  }
}