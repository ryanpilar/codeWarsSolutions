// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name){

    let temp = name.split(' ').map( word => word[0].toUpperCase())
    return `${temp[0]}.${temp[1]}`

}

const name = 'ryan pilar'
console.log(abbrevName(name));