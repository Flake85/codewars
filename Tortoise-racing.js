// https://www.codewars.com/kata/55e2adece53b4cdcb900006c

function race(v1, v2, g) {
  if(v1 >= v2) return null
  var decimalTimeString = g / (v2 - v1);
  var n = new Date(0,0);
  n.setSeconds(+decimalTimeString * 60 * 60);
  let result = []
  result.push(n.getHours())
  result.push(n.getMinutes())
  result.push(n.getSeconds())

  return result
}