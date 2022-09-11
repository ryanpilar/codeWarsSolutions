// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

function countBy(x, n) {
    
    let z = [];
    for ( let i = x; i<=(n*x); i+=x) z.push(i) 

    return z
}

const x = 2
const n = 5
console.log(countBy(x, n));