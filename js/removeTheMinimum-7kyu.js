// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

function removeSmallest(numbers) {

    const cloneNumbers = [...numbers]
    const theMin = Math.min(...cloneNumbers)
    cloneNumbers.splice(cloneNumbers.indexOf(theMin), 1)
    
    return cloneNumbers === undefined ? [] : cloneNumbers
}


const numbers = [] // [2, 3, 4, 5]
// const numbers = [5, 3, 2, 1, 4] // [5, 3, 2, 4]
// const numbers = [2, 2, 1, 2, 1] // [2, 2, 2, 1]


console.log( removeSmallest(numbers) )