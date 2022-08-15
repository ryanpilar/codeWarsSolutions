// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

function grow(x){

    return x.reduce( (product, current) => {return product * current})
}

x = [4, 1, 1, 1, 4]
console.log(grow(x));