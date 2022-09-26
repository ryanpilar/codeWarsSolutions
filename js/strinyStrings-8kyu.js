// https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript

function stringy(size) {

    newStr = []
    for ( let i=0; i<size; i++ ) {
        newStr.push(i % 2 === 0 ? '1' : '0')
        
    }
    return newStr.join('')
}

const size = 3
console.log(stringy(size));