// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

function arrayPlusArray(arr1, arr2) {
    
    return arr1.concat(arr2).reduce( (sum, current) => sum + current )
}

const arr1 = [-1, -2, -3]
const arr2 = [-4, -5, -6]
console.log(arrayPlusArray(arr1, arr2));