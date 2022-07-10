// https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript

function mergeArrays(arr1, arr2) {
    console.log(arr1, arr2)
    return [...new Set( arr1.concat(arr2).sort( (a,b) => a-b ) )]
  
}

const arr1 = [1,3,5,7,9]
const arr2 = [10,8,6,4,2]

console.log(mergeArrays(arr1, arr2));