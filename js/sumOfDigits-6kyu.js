function digital_root(n) {
    // https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

    const arr = Array.from(String(n))

    const theSum = arr.reduce( (accum, current) => { 
        return Number(accum) + Number(current)
    }, 0)

    if( theSum < 10 ) { return theSum } 
    else { 
        return digital_root( theSum )
    }

}

const n = 493193
console.log(digital_root(n))