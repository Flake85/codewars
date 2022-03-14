// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s) {
  let half = s.length / 2;
  return ((s.length % 2) == 0) ? (s[(half - 1)].concat("", s[half])) : (s[Math.floor(half)])
}