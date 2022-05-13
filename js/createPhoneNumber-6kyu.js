
// https://www.codewars.com/kata/525f50e3b73515a6db000b83

function createPhoneNumber(numbers) {
    const areaCode = []
    const threeDigit = []
    const fourDigit = []

    numbers.forEach( (currentValue, index) => {
        // index 0-2
        if(index <= 2) {areaCode.push(currentValue)}
        // index 3-5
        else if( index > 2 && index <= 5 ) {threeDigit.push(currentValue)}
        // index 6-9
        else if( index > 5 ) {fourDigit.push(currentValue)}
  
    })

    return `(${areaCode.join('')}) ${threeDigit.join('')}-${fourDigit.join('')}`
   
}

// const numbers = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// console.log('createPhoneNumber(numbers)', createPhoneNumber(numbers))
