// https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3/train/javascript

function duplicates(array){

    const pairs = []
    const tally = {}

    // what about undefined?
    const isDouble = (obj, key) => obj[key] > 1
    
    array.forEach( e => {

        // add key value pair
        tally[e] ? tally[e]++ : tally[e] = 1

        // check if double and add accordingly
        if( isDouble(tally, e) ) {
            pairs.push(e)
            tally[e] = 0
        } 
    })
    console.log('pairs', pairs)
    return pairs.length
}

// const array = [1, 2, 5, 6, 5, 2] // 2 
const array = [1, 2, 2, 20, 6, 20, 2, 6, 2] // 4 
// const array = [0, 0, 0, 0, 0, 0, 0] // 3 
// const array = [1000, 1000] // 1 
// const array = [] // 0 
// const array = [54] // 0 

console.log('duplicates(array)', duplicates(array))