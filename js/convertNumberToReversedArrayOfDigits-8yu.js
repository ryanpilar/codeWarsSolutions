// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

function digitize(n) {
    return String(n).split('').reverse().map( num=> Number(num) )
  }

const n = 35231
console.log(digitize(n));