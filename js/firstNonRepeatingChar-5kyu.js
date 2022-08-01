// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
    const singles = []
    const tracker = []

    s.split('').forEach( char => {

       if (! tracker.includes(char.toLowerCase())) {
        tracker.push(char)
        singles.push(char)
       }
       else {

            if ( singles.includes(char.toLowerCase()) ){
                singles.splice( singles.indexOf(char.toLowerCase()), 1 ) 
            }
            if ( singles.includes(char.toUpperCase()) ) {
                singles.splice( singles.indexOf(char.toUpperCase()), 1 )
            }
       }
    })

    return singles.length == 0 ? '' : singles.shift()

}



const s = 'fff'
console.log(firstNonRepeatingLetter(s));