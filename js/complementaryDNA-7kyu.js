// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function DNAStrand(dna){

    const mirror = []

    dna.split('').forEach( letter => {
        if(letter === 'A'){ mirror.push('T')}
        else if(letter === 'T'){mirror.push('A')}
        else if(letter === 'C'){mirror.push('G')}
        else if(letter === 'G'){mirror.push('C')}
    })
    return mirror.join('')
}

// const dna = "AAAA"   // "TTTT","String AAAA is")
// const dna = "ATTGC"   // "TAACG","String ATTGC is")
const dna = "GTAT"   // "CATA","String GTAT is")

console.log(DNAStrand(dna))