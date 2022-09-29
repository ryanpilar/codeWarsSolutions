// https://www.codewars.com/kata/57a55c8b72292d057b000594

function reverse(string){
    return string.split(' ').reverse().join(' ')
}

const string = 'I am an expert at this'
console.log(reverse(string))