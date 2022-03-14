// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
  let temp = []
  let result = []
  s.split("").forEach((el, i)=>{
    temp.push(el.toUpperCase())
    while (i > 0) {
      temp.push(el.toLowerCase())
      i--
    }
    result.push(temp.join(""))
    temp = []
  })
  return result.join("-")
}