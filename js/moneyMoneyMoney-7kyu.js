// https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript

function calculateYears(principal, interest, tax, desired) {
    // your code

    let counter = 0
    let investmentTotal = principal

    while( investmentTotal <= desired && principal !== desired) {
        let accrued = investmentTotal * interest
        let chargedTax = accrued * tax

        counter++
        investmentTotal = investmentTotal + accrued - chargedTax
    }

    return counter
}

const principal = 1000
const interest = 0.01625
const tax = .18
const desired = 1200

console.log( calculateYears(principal, interest, tax, desired) )


