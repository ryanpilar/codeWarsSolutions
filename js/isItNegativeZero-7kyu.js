// https://www.codewars.com/kata/5c5086287bc6600001c7589a/train/javascript
function isNegativeZero(n) {

    return Object.is(-0, n)
}


const n = -0
console.log(isNegativeZero(n))