// https://www.codewars.com/kata/56541980fa08ab47a0000040

function printerError(s) {
  return s.split('').filter((a) => !/[a-m]/g.test(a)).length + "/" + s.length
}