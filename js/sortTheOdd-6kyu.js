function sortArray(array) {
    // https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
    
    let copyArray = array.slice(0)
    let holdOdds = []

    array.forEach( (num, index) => {
        if( num % 2 !== 0 ) { 
            holdOdds.push(num) 
            // change its current position to null
            copyArray[index] = null
        }
    })

    holdOdds.sort( (a, b) => a-b)

    copyArray.forEach( (num, index) => {
        if ( num === null ) { copyArray[index] = holdOdds.shift() }
    })
    return copyArray
}