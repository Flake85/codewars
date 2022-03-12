// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

function DNAStrand(dna){
  var dnaComplements = [{
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  }];
  var splitDNA = dna.split("");
  
  var result = dnaComplements.map(function(e) {
    return splitDNA.map(function(key) {
      return e[key]
    })
  })
  
  return result.join("").replace(/,/g, "");
}