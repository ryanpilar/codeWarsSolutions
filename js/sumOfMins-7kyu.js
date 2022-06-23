// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

function sumOfMinimums(arr) {
    const newArray = []
    arr.forEach( set => {
        set.sort( (a,b) => b-a)
        newArray.push(set.pop())
    })
    return newArray.reduce( (accum, current) => {return accum + current}, 0)

}

const arr = [[114, 23], [121, 3], [67, 34]]
console.log(sumOfMinimums(arr));