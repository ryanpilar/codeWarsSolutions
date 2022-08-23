// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

function squareSum(numbers){

    return (
        numbers
            .map( num => num ** 2 )
            .reduce( (current, next) => { return current + next }, 0)
    )
}

const numbers = [1,2]

console.log(squareSum(numbers));