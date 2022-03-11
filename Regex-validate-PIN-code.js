// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

function validatePIN (pin) {
  return pin.length !== 4 && pin.length !== 6 ? false : /^\d+$/.test(pin) ? true : false
}