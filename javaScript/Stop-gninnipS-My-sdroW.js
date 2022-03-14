// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(str){
  var splitStr = str.split(" ");
  var newStrArr = [];
  for (var x = 0; x < splitStr.length; x++) {
    splitStr[x].length < 5 ? newStrArr.push(splitStr[x]) : newStrArr.push(splitStr[x].split("").reverse().join(""));
  }
  return newStrArr.join(" ");
}