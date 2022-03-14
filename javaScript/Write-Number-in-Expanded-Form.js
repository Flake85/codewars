// https://www.codewars.com/kata/5842df8ccbd22792a4000245

function expandedForm(num) {
  let result = []
  let temp = []
  num.toString().split("").forEach((d, i) => {
    temp.push(d)
    let zeroesNeeded = ((num.toString().length-i)-1)
    while(zeroesNeeded > 0) {
      temp.push("0")
      zeroesNeeded--
    }
    result.push(temp.join(""))
    temp = []
  })
  return result.filter(n=>n>0).join(" + ")
}