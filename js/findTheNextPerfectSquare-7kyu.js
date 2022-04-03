function findNextSquare(sq) {
    // https://www.codewars.com/kata/56269eb78ad2e4ced1000013
    
    if(Number.isInteger(Math.sqrt(sq))) { 
        sq += 1
        while( ! Number.isInteger(Math.sqrt(sq)) ) {
            sq += 1
        }
     } else { return -1}

    return sq
    }