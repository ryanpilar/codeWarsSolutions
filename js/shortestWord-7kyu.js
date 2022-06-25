// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s){
    const splitStr = s.split(' ')
    let largestWord = 100

    splitStr.forEach( word => {
        word.length < largestWord ? largestWord = word.length : false
    })
    return largestWord
}

// const s = "bitcoin take over the world maybe who knows perhaps" // 3
// const s = "turns out random test cases are easier than writing out basic ones" // 3 
// const s = "Let's travel abroad shall we" // 2
const s = 'two'

console.log(findShort(s))