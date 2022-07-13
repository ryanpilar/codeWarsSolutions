// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

var capitals = function (word) {


    const arrOfIndices =  word.split('').map( (char,index) => {
        if (char.toUpperCase() === char && char !== ' ' ) { 
            return index
        }
    })
    // arrOfIndices.includes(' ') ? arrOfIndices.replace(' ') : false
    return arrOfIndices.filter( element => element !== undefined)
}

const word = 'CodEWaRs'


console.log(capitals (word) );