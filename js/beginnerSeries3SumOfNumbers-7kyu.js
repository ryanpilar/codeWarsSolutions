// https://www.codewars.com/kata/55f2b110f61eb01779000053/javascript

function getSum( a,b ) {

    let largeNum = undefined
    let smallNum = undefined
    if( a < b ) {
        smallNum = a
        largeNum = b
    } else {
        smallNum = b
        largeNum = a
    }

    let theSum = 0
    for( let i = smallNum; i <= largeNum; i++ ) {
        theSum += i
    }
    return theSum
}
const a = 0
const b = -1
console.log(getSum(a,b))