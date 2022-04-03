function nbYear(p0, percent, aug, p) {
    // https://www.codewars.com/kata/563b662a59afc2b5120000c6
    let yearCounter = 0

    // for every year
    while (p0 < p) {
        // increase by 2% and add 50
        
        p0 += Math.floor( (percent / 100) * p0 )
        p0 += aug
        
        yearCounter += 1
    }
    return yearCounter
}