function duplicateEncode(word){
    
    let brackets = []
    const inventory = {}


    for( char of word.toLowerCase() ) {
        console.log(char)
        inventory[char] ? 
            inventory[char]++ : 
            inventory[char] = 1
    }

    for( char of word.toLowerCase() ) {
        inventory[char] > 1 ? 
            brackets.push(')') : 
            brackets.push('(')
    }

    return brackets.join('')

}

// const word = "din"
// const word = "recede"
const word = "Success"
// const word = "(( @"

console.log( duplicateEncode(word) )