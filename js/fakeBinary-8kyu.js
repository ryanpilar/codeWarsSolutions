// https://www.codewars.com/kata/57eae65a4321032ce000002d

function fakeBin(x){

    return x.split('').map( num => Number(num) < 5 ? '0' : '1' ).join('')
}

const x = '45385593107843568'

console.log(fakeBin(x));