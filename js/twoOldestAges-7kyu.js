// https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript

function twoOldestAges(ages){

    ages.sort( (a, b) => a-b)
    const bigOne = ages.pop()
    const bigTwo = ages.pop()

    return [bigTwo, bigOne]
}

const ages = [6,5,83,5,3,18]
console.log(twoOldestAges(ages));