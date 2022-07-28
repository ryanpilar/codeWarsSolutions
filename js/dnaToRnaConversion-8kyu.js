// https://www.codewars.com/kata/5556282156230d0e5e000089

function DNAtoRNA(dna) {
    
    return dna.split('').map( char => char === 'T' ? 'U' : char).join('')
}
const dna = 'GACCGCCGCC'

console.log(DNAtoRNA(dna));