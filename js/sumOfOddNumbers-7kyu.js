function rowSumOddNumbers(n) {
    // https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
    let total = 0
    let current = 1
    const increment = 2

    for( let i=1; i<=n; i++) {

        for( let column = 0; column < i; column++){
            
            if(i === n) { total += current }
            current += increment
        }
    }
    return total
}