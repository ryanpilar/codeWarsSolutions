// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

function stray(numbers) {

    let numberBank = {}
    

    numbers.forEach( num => {
        // console.log(numberBank, numberBank[num])

        if( numberBank[num] !== undefined) {
            numberBank[num]++
        } else {
            numberBank[num] = 1
        }
    })

    for( entry in numberBank ) {
        if( numberBank[entry] === 1 ) {
            // console.log('yeah', entry)
            return +entry;
        }
    }

    
}


const numbers = [1, 1, 2]
console.log( stray(numbers) )