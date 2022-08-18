// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number=function(array){

    const newObj = []

    array.forEach( (num, index) => {

        newObj.push(`${index+1}: ${num}`)  
    }) 

    return newObj
}

console.log(number(["a", "b", "c"]))