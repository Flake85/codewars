// https://www.codewars.com/kata/583f158ea20cfcbeb400000a

function arithmetic(a, b, operator){
  return operator === "add" ? a + b 
          : operator === "subtract" ? a - b 
          : operator === "multiply" ? a * b 
          : operator === "divide" ? a / b 
          : "Not valid operator!"
}