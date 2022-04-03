function getCount(str) {
    // https://www.codewars.com/kata/54ff3102c1bad923760001f3
    
    var vowelsCount = 0;
    
    // enter your majic here
    for( let char of str ) {
        char === 'a' ||
        char === 'e' ||
        char === 'i' ||
        char === 'o' ||
        char === 'u' ? 
        vowelsCount += 1 : false
    }
    return vowelsCount;
}