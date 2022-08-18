// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

function removeChar(str){
    //You got this!
    let hold = str.split('')
    hold.pop()
    hold.shift()

    return hold.join('')
};
   
const str = 'eloquent'
console.log(removeChar(str))   
   
   