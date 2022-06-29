// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

function removeEveryOther(arr){

    return arr.filter( (num, index) => index % 2 === 0 )
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(removeEveryOther(arr));