// https://www.codewars.com/kata/595970246c9b8fa0a8000086

function capitalizeWord(word) {

    return (
        word
            .split('')
            .map( (char, index) => index == 0 ? char.toUpperCase() : char )
            .join('')
    )
}

const word = 'glasswear'
console.log(capitalizeWord(word));