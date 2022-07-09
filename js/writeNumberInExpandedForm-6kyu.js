// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

function expandedForm(num) {

    let numString = String(num).split('')
    let startString = `${numString.shift()}${numString.length > 0 ? '0'.repeat(numString.length) : ''}`
    
    numString.forEach( (char, index) => {
        char === '0' ? false : startString += ` + ${char}${'0'.repeat(numString.length-1-index)}`
        
    })
    return startString
}

// const num = 12  // '10 + 2');
// const num = 42  // '40 + 2');
const num = 2  // '70000 + 300 + 4');

console.log(expandedForm(num))