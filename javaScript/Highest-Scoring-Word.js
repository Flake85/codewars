// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(x){
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let temp = []
  let tempFinal = []
  x.split(" ").forEach((w,i) => {
    temp = []
    for(let a= 0; a < w.length; a++) {
      temp.push((alphabet.indexOf(w[a])+1))
    }
    tempFinal.push(temp.reduce((c,b)=>c+b))
  })
  return x.split(" ")[tempFinal.indexOf(Math.max(...tempFinal))]
}