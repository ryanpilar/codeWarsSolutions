//https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript

function divisibleBy(numbers, divisor){
    return numbers.filter( num => num % divisor === 0 )
}

const numbers = [1,2,3,4,5,6]
const divisor = 3

console.log(divisibleBy(numbers, divisor));