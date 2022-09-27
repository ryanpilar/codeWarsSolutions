// https://www.codewars.com/kata/57e1e61ba396b3727c000251

function stringClean(s) {

    return s
        .split('')
        .filter( char => {
            if (char === '0') return false
            else if (Number(char)) return false
            else return true
        })
        .join('')
}

const s = 'My "messy" data issues! Will they ever, ever be so0lved?'
console.log(stringClean(s));