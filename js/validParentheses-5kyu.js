function validParentheses(parens) {
    // https://www.codewars.com/kata/52774a314c2333f0a7000688
    if(parens.length % 2 !== 0) { 
        return false 
    } 

    else {
        let aList = []
        let listify = Array.from(parens)

        for( let bracket of listify ) {
            if( aList.length === 0 && bracket === ')' ) { return false } 
            else if ( bracket === '(' ) { aList.push( bracket ) }
            else if ( bracket === ')' ) { aList.pop() }
        }
       
        return aList.length === 0 ? true : false
    }    
}