// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921

function find_average(array) {
  // your code here
  return array.length ? (array.reduce((a,b) => a+b) / array.length) : 0;
}