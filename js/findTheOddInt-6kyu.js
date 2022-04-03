function findOdd(A) {
    // https://www.codewars.com/kata/54da5a58ea159efa38000836

    let aObjt = {}
    A.forEach( number => {
        aObjt[number] === undefined ? aObjt[number] = 1 : aObjt[number] += 1 })
        
    for( let key in aObjt ) { if( aObjt[key] % 2 !== 0 ) { return Number(key) } }
}