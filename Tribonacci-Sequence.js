// https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(signature,n){
  if (n < 3) {
    return signature.splice(0, n)
  }
  while (signature.length < n) {
    signature.push(signature[signature.length - 1] + signature[signature.length - 2] + signature[signature.length - 3])
  }
  return signature
}