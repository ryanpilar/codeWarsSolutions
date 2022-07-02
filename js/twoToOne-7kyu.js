// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {

    let base = []
    s1.split('').forEach( char => base.includes(char) ? false: base.push(char) )
    s2.split('').forEach( char => base.includes(char) ? false: base.push(char) )
    return base.sort().join('')
}

// const s1 = "aretheyhere" 
// const s2 = "yestheyarehere" // "aehrsty")
// const s1 = "loopingisfunbutdangerous" 
// const s2 = "lessdangerousthancoding" // "abcdefghilnoprstu")
const s1 = "inmanylanguages" 
const s2 = "theresapairoffunctions" // "acefghilmnoprstuy")

console.log( longest(s1, s2) )