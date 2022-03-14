// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

function abbrevName(name){
  if (this.name !== 0) {
    result = name.split(" ").map(function(word) {
      return word.substring(0, 1).toUpperCase();
    }).join(".");
  }
  return result;   
}