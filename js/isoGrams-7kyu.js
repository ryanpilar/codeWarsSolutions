https://www.codewars.com/kata/54ba84be607a92aa900000f1/solutions/javascript

function isIsogram(str){

    const checkLtr = {}

    for(char of str) {
        let lowercased = char.toLowerCase()
        checkLtr[lowercased] ? checkLtr[lowercased]++ : checkLtr[lowercased] = 1
        if(checkLtr[lowercased] > 1) {return false}
    }
    return true
  }

// const str = "Dermatoglyphicss"   // true );
// const str = "isogram"   // true );
// const str = "aba"   // false, "same chars may not be adjacent" );
// const str = "moOse"   // false, "same chars may not be same case" );
// const str = "isIsogram"   // false );
const str = ""   // true, "an empty string is a valid isogram" );

console.log( isIsogram (str) )