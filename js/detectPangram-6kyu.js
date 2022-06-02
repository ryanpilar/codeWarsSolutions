// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string){
    
    const stringAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetObj = {}

    stringAlphabet.split('').forEach( e => alphabetObj[e] = 0 )
    for(letter of string) {

        const lowercaseLetter = letter.toLowerCase()
        lowercaseLetter ? alphabetObj[lowercaseLetter]++ : false
    }

    for(key in alphabetObj) {
        if ( alphabetObj[key] === 0 ) return false
    }
    return true

}


// const string = "This is not a pangram." //false
const string = "/The q/uick brown fox jumps over the lazy dog." // true
console.log(isPangram(string))