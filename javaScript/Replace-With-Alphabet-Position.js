// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var results = [];
  
  var newText = text.toLowerCase().replace(/[^a-z]/ig,"");
  
  for (var x = 0; x < newText.length; x++) {
    var index = alphabet.indexOf(newText[x]);
    if (index > -1) {
      results.push(index + 1);
    }
  }
  return results.join(" ");
}