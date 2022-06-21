// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

function oddOrEven(array) {

    const hold = array.reduce( (previous, current) => {
        return previous + current
    }, 0)

    return hold % 2 === 0 ? 'even' : 'odd'
 }       


 const array = [1]
 console.log( oddOrEven( array ))

