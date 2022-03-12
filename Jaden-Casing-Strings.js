// https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function () {
  var result = this;
  if (this.length !== 0) {
    result = this.split(" ").map((word) => {
      return word.substring(0, 1).toUpperCase() + word.substring(1);
    }).join(" ")
  }
  return result
};