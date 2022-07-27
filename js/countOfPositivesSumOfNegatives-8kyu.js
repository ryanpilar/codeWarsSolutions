// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

function countPositivesSumNegatives(input) {
    if (input === []) return []
    if (input === null) return []

    const countPositives = input.filter( num => num > 0 ).length
    const sumNegatives = input.filter( num => num < 0 ).reduce( (sum, current) => {return sum + current}, 0)

    return [countPositives, sumNegatives]
}
const input = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]
console.log(countPositivesSumNegatives(input))