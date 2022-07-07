// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
function smallEnough(a, limit){

    return a.every( num => num <= limit)
}


const a = [66, 201]
const limit = 200

console.log(smallEnough(a, limit));