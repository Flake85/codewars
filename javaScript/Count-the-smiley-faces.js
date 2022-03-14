// https://www.codewars.com/kata/583203e6eb35d7980400002a

function countSmileys(arr) {
  return arr.filter(s => {
    return s.length === 2 ? s === ":)" || s === ":D" || s === ";)" || s === ";D"
        : s.length === 3 ? s === ":-)" || s === ":-D" || s === ";-)" || s === ";-D" || s === ":~)" || s === ":~D" || s === ";~)" || s === ";~D"
        : 0
      }).length
}