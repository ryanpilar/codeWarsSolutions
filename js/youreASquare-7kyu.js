// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

var isSquare = function(n){
    const findSquare = Math.sqrt(n)
    return Number.isInteger(findSquare) 
}

const n = 4
console.log('iSquare:', isSquare(n))