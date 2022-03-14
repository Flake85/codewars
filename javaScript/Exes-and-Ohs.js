// https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
    return str.split("").filter(a => a === "x" || a === "X").length === str.split("").filter(a => a === "o" || a === "O").length
}