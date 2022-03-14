// https://www.codewars.com/kata/559590633066759614000063

function minMax(arr){
  return [arr.sort((a,b)=>a-b)[0], arr.sort((a,b)=>a-b)[arr.length-1]]
}