function findMissingLetter(array) {
    // https://www.codewars.com/kata/5839edaa6754d6fec10000a2
    
    let check = array[0].charCodeAt()

    for(char of array) {
        if(char.charCodeAt() !== check) {
            return String.fromCharCode(check) } 
        else { check += 1 }
    }
}