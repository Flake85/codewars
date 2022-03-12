// https://www.codewars.com/kata/57a429e253ba3381850000fb

function bmi(weight, height) {
  let bmi = weight / (height * height)
    return bmi <= 18.5 ? "Underweight" :
           bmi <= 25.0 ? "Normal" :
           bmi <= 30.0 ? "Overweight" :
           "Obese"
}