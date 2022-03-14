// https://www.codewars.com/kata/5544c7a5cb454edb3c000047

function bouncingBall(h,  bounce,  window) {
  let result = 0;
  let test = h
  
  if(h > 0 && bounce > 0 && bounce < 1 && window < h) {
    while((test *= bounce) > window) {
      result++
    }
  } 
  else {
    return -1
  }
  return (result * 2) + 1
}