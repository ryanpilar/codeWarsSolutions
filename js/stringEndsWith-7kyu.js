//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

function solution(str, ending) {

    if (ending.length > str.length) { 
        return false
    } else {
        const strArr = str.split('')
        const endingArr = ending.split('')
        const endingLength = endingArr.length

        for( i=0; i<endingLength; i++ ) {
            if( strArr.pop() !== endingArr.pop() ) { return false }
        }
    }
    return true
}






const str = 'abcde'   //false
const ending = 'abc'
//   const str = 'abcde'   //true
//   const ending = 'cde'

console.log(solution(str, ending))