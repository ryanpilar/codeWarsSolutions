// https://www.codewars.com/kata/559ac78160f0be07c200005a

function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
}

const str = 'Mary jeggins'
console.log(nameShuffler(str));