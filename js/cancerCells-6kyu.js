
// https://www.codewars.com/kata/5931614bb2f657c18c0001c3/train/javascript

function cutCancerCells(organism) {
    

    const newSequence = []
    let isBigC = false 

      
    // check if char is cancer, returns a boolean
    const isCancer = (char) => {
        console.log('---WHAT GIVES:', char)
        return char.toLowerCase() === 'c'
    }
    
    // check if char is uppercase, returns a boolean
    const isUpperCase = (char) => char ? char.toUpperCase() === char : true
    
    // upDates newSuquence
    function addToSequence(char) { 
        console.log('---adding char:', char, 'to newSequence:', newSequence)
        return newSequence.push(char) }

    // split string into array elements
    const splitLetters = organism.split('')
    console.log('original list:', splitLetters)
    console.log('original organism:', organism)

    for(let i in splitLetters) {

        // check if the current char is cancerous
        const checkForCancer = isCancer(splitLetters[i])
        console.log('checkForCancer:', checkForCancer, splitLetters[i])

        if( checkForCancer === true ) {

            // check if the current char is uppercase
            const largeCancer = isUpperCase(splitLetters[i])
            console.log('---is it a large cancer?:', largeCancer)

            if( largeCancer === true ) {
                
                // what is the last item in newSequence?
                const lastListItem = newSequence.slice(-1)
                console.log('---current newSequence', newSequence, 'last item', ...lastListItem)

                // does the last item a cancer?
                if( lastListItem[0] === 'c' )  {
                    console.log('------made it to cccc')
                }
                // this line handles an odd edge case and throws it to the side 
                else if(lastListItem === undefined) {'---undefined, so do nothing with'} 
                // if its not uppercase, than pop
                else if(!isUpperCase(lastListItem[0])) {

                    console.log('---UPDATED sequence:', newSequence)
                    newSequence.pop()
                    console.log('---updated sequence:', newSequence)
                }

                console.log('---before lowercase happens:', splitLetters[i], 'to lowercase:', splitLetters[i].toLowerCase())
                addToSequence(splitLetters[i].toLowerCase())
                console.log('---updated sequence:', newSequence)

                console.log('---changing Big c to:', true)
                isBigC = true 
            } else {
                addToSequence(splitLetters[i])
                console.log('---updated sequence:', newSequence)
                console.log('---changing Big c to:', false)
                isBigC = false
            }
        }

        // NO Cancer
        else {
            console.log('---NOT cancer', splitLetters[i])
            

            if( isBigC === true ) {
                // if BigC is true, if uppercase is true, then add to new sequence and reset BigC
                console.log('---previous was Big Cancer')
                
                const hold = isUpperCase(splitLetters[i])
                console.log('---isUpperCase', hold, splitLetters[i])
                console.log('---updated sequence:', newSequence)


                if( isUpperCase( splitLetters[i] ) ) {
                    addToSequence(splitLetters[i])
                    console.log('---changing Big c to:', false)
                    isBigC = false
                    
                // if BigC is true, if uppercase false, do not add char, reset BigC
                } else {
                    console.log('--- did not add char')
                    console.log('---updated sequence:', newSequence)
                    console.log('---changing Big c to:', false)
                    isBigC = false
                }
            // when BigC is false, always add the char
            } else {
                addToSequence(splitLetters[i])
                console.log('---updated sequence:', newSequence)
                console.log('---changing Big c to:', false)
                isBigC = false
                
            }
        }
    }
    // convert back to a string
    return newSequence.filter(char=>char!=='c').join('')
}


// const organism = 'CC'
// const organism = 'CaaC'
// const organism = 'C'
// const organism = 'acb'
// const organism = 'aCb'
// const organism = 'acCb'
// const organism = 'acCcb'
// const organism = 'ab'
// const organism = 'aCZ'
// const organism = 'BCE'
// const organism = 'nce'
// const organism = 'NcE'
const organism = "fcclEjgcCNnGcccVlgBcZtGcJcCJcJthcHibNSLcDq"
// const woah = [
//   'f', 'c', 'c', 'l', 'E', 'j', 'g',
//   'c', 'C', 'N', 'n', 'G', 'c', 'c',
//   'c', 'V', 'l', 'g', 'B', 'c', 'Z',
//   't', 'G', 'c', 'J', 'c', 'C', 'J',
//   'c', 'J', 't', 'h', 'c', 'H', 'i',
//   'b', 'N', 'S', 'L', 'c', 'D', 'q'
// ].join('')


// console.log('woaho', woah)

console.log(cutCancerCells(organism))