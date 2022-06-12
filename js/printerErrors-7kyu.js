
// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

function printerError(s) {
    let printerErrors = 0
    const searchString = 'abcdefghijklm'
    s.split('').forEach( char => {
        searchString.includes(char) ? false : printerErrors++  

    })
    return `${printerErrors}/${s.length}`
}

const s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz" // '3/56'
console.log( printerError(s) )