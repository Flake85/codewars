// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

function century(year) {
  let str = year.toString()
  
  return str.length > 2 ? parseInt(str.slice(str.length-2, str.length)) ? (parseInt(str.slice(0,str.length-2)) + 1) : parseInt(str.slice(0,str.length-2)) : 1
}