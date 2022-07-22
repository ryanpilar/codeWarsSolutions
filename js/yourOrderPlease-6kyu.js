// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
function order(words){
    const sortedWordObj = {}

    words.split(' ').forEach( word => {
        for( char of word ) Number(char) ? sortedWordObj[char] = word : false
    })

    const buildSentance = []
    for( param in sortedWordObj ) buildSentance.push(sortedWordObj[param]) 

    return buildSentance.join(' ')
}

// const words = "is2 Thi1s T4est 3a"  // "Thi1s is2 3a T4est")
const words = "4of Fo1r pe6ople g3ood th5e the2"  // "Fo1r the2 g3ood 4of th5e pe6ople")
// const words = ""  // "", "empty input should return empty string" )

console.log(order(words))