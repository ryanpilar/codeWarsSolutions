// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

function sum (numbers) {
    
    if(numbers === []) return 0
    return numbers.reduce( (sum, current) => {return sum + current}, 0)

};

const numbers = [1, 5.2, 4, 0, -1]
console.log( sum(numbers) );