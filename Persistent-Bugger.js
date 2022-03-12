// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
  var x = 0;
  while (num.toString().length !== 1) {
    num = num.toString().split("").reduce((a,b)=>a*b);
    x++;
  } 
  return x;
}