// https://www.codewars.com/kata/51c8991dee245d7ddf00000e

function reverseWords(str){
    return str.split(' ').reverse().join(' ')
}

const str = 'yoda doesn"t speak like this'
console.log(reverseWords(str))