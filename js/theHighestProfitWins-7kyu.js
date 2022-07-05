// https://www.codewars.com/kata/559590633066759614000063/train/javascript

function minMax(arr){

    const findMin = Math.min(...arr)
    const findMax = Math.max(...arr)

    return [findMin,findMax]; // fix me!
}
const arr = [5]
console.log(minMax(arr))