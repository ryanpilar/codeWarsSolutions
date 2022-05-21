// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s) {

    const stringLength = s.length
    const isEven = stringLength % 2 === 0

    // if even
    if(isEven) {
        const firstMiddle = stringLength / 2
        const secondMiddle = firstMiddle - 1
        return s[secondMiddle] + s[firstMiddle]
    }
    // if odd
    else {
        return s[Math.trunc(stringLength/2)]
    }
}

const s = 'test'
console.log('getMiddle(s)', getMiddle(s))