function arrayDiff(a, b) {
    // https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

    let newA = [...a]
    b.forEach( num => { newA = newA.filter( e => e !== num ) })
    return newA
}

const a = [1,2,2,2,2,3,4,5,5]
const b = [2, 1]