// https://www.codewars.com/kata/546e2562b03326a88e000020

function squareDigits(num){
  var intArr = [...num+''].map(n=>+n);
  var result = [];
  
  for (x=0;x<intArr.length;x++){
    result.push(intArr[x] * intArr[x]);
    var results = Number(result.join(""));
  }
  
  return results
}