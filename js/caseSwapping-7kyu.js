function swap(str){
    // https://www.codewars.com/kata/5590961e6620c0825000008f 
    let newString = ''
    for(char of str) {
        
        char == char.toUpperCase() ? 
            newString += char.toLowerCase() :
            newString += char.toUpperCase() ;
    }
    return newString // ha
    }