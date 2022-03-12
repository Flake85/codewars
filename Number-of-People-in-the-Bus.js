// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

var number = function(busStops){
  let pplOn = 0;
  for (let x = 0; x < busStops.length; x++) {
    pplOn -= busStops[x][1]
    pplOn += busStops[x][0]
  }
  return pplOn
}