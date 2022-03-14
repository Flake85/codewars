// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data){
  let results = []
  for(let x=0; x < data.length; x++) {
    data[x][0] >= 55 && data[x][1] > 7 ? results.push('Senior') : results.push('Open')
  }
  return results
}