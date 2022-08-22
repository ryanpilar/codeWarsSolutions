// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e


function twoSort(s) {
    
    console.log(s.sort());
    return s.sort()[0].split('').join('***')
}

const s = ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]
console.log(twoSort(s));