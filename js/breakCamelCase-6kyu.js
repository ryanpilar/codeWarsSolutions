// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

function solution(string) {
    // let newArr = []
    let newArr = string.split('').map( (char, index) => {

        return char === char.toUpperCase() ? ` ${char}` : char
    })
    return newArr.join('')
}


const string = 'helloThereHowYaIMe'
console.log(solution(string));