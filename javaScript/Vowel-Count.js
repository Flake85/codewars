// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  let vowelsCount = str.split("").filter((letter) => {
    return letter === "a" || letter === "e" ||letter === "i" || letter === "o" || letter === "u"
  })
  return vowelsCount.length;
}