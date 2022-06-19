// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

const binaryArrayToNumber = arr => {

    let doMath = 0
    const reverseArr = arr.reverse()
    reverseArr.forEach( (num, index) => {
        num === 0 ? false : doMath += 2**index
    })
    return doMath
};

// const arr = [0,0,0,1] // 1)
// const arr = [0,0,1,0] // 2)
// const arr = [1,1,1,1] // 15;
const arr = [0,1,1,0] // 6)

console.log(binaryArrayToNumber(arr))