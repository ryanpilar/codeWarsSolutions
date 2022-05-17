// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function descendingOrder(n) {

    const strToList = String(n).split('')
    const backAndFourth = strToList.map( e => Number(e)).sort( (a,b) => b-a)

    return Number(backAndFourth.map( e => String(e) ).join(''))

}


const n = 123456789 
console.log('descendingOrder(n)', descendingOrder(n))