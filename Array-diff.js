// https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
  for (let x=0; x<a.length; x++) {
    for (let y=0; y<b.length; y++) {
      if (a[x] === b[y]) {
        a.splice(x, 1)
        x--
      }
    }
  }
  return a
}