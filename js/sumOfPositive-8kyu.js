// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

function positiveSum(arr) {

    if (arr.length == 0) {return 0}
    return (
        arr
            .filter( num => num > 0 )
            .reduce( (current, next) => {return current + next}, 0 )
            )
}

const arr = [1,2,3,4,5]
console.log(positiveSum(arr));