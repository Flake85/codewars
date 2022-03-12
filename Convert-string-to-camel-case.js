// https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str){
  var newStr = str.replace(/([^A-Za-z])/g, " ").split(" ");
  for (var x = 1; x < newStr.length; x++) {
    newStr[x] = newStr[x].charAt(0).toUpperCase() + newStr[x].substring(1);
  }
  var camelStr = newStr.join("");
  return camelStr;
}