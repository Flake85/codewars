// https://www.codewars.com/kata/5949481f86420f59480000e7

function oddOrEven(array) {
  if(array.length === 0) {
    return "even"
  }
  let reduced = array.reduce((a,b)=>{
    return a+b
  })
  return reduced % 2 == 0 ? "even" : "odd"
}