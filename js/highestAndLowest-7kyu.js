// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers){

    console.log('original number', numbers)

    const stringToArray = numbers.split(' ').map( e => Number(e))
    stringToArray.sort((a, b) => a-b)

    console.log('stringToArray', stringToArray)
    const highest = stringToArray.slice(-1)
    console.log('highest', highest)
    const lowest = stringToArray.shift(0)

    return `${highest} ${lowest}`
}

const numbers = "42" // "42 -9"
console.log(highAndLow(numbers))