// https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str){
  return !str.toLowerCase().split("").some((v,i,a) => a.lastIndexOf(v)!=i )
}