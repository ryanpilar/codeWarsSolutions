// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

function gimme (triplet) {
    const tripletCopy = triplet.slice()
    tripletCopy.sort( (a,b) => a-b)
    return triplet.indexOf(tripletCopy[1])
}

const triplet = [ 2, 3, 1 ]
console.log( gimme(triplet) );