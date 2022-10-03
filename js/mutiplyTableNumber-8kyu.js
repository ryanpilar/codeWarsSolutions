// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript

function multiTable(number) {
    const numList = [1,2,3,4,5,6,7,8,9,10]
    const expressions = numList.map( multiplier => `${multiplier} * ${number} = ${multiplier * number}`)
    return expressions.join('\n')
}

const number = 5
console.log(multiTable(number));