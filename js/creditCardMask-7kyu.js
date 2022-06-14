
// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

function maskify(cc) {
    let newC = cc.split('')
    const lastFour = newC.splice(newC.length-4 < 0 ? 0 : newC.length-4, 4)
    return newC.map( e => '#').join('') + lastFour.join('')
}



const cc = '4556364607935616' // '############5616');
// const cc = '1' // '1');
// const cc = '11111' // '#1111');
// const cc = '0n3'

console.log( maskify( cc) )