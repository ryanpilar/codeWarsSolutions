// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

function reverseWords(str) {

    return str.split(' ').map( word => word.split('').reverse().join('')).join(' ')
}

const str = 'The quick brown fox jumps over the lazy dog.' // 'ehT kciuq nworb xof spmuj revo eht yzal .god'
console.log(reverseWords(str))

