// https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
  let tracker = [0, 0];
  if(walk.length === 10) {
    walk.forEach(d=>{
      d === 'n' ? tracker[0]+=1 : d === 's' ? tracker[0]-=1 : d === 'e' ? tracker[1]+=1 : tracker[1]-=1
    }) 
    return tracker[0] === 0 && tracker[1] === 0 ? true : false
  } else {
    return false
  }
}