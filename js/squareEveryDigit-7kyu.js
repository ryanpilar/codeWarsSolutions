function squareDigits(num) {
    // https://www.codewars.com/kata/546e2562b03326a88e000020
    
    return (
        Number( Array.from(String(num) )
        .map( e => Number(e)**2 )
        .join('') )
    )
}