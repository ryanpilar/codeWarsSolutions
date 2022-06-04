
// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
function narcissistic(value) {

    const numArray = ( String(value) ).split('')
    const newArray = numArray.map( e => Number(e) ** numArray.length )
    const sumArray = newArray.reduce( (total, current) => total + current, 0 )

    return value === sumArray ? true : false
}

const value = 7
console.log( narcissistic( value ) ) // true, "371 is narcissistic" );