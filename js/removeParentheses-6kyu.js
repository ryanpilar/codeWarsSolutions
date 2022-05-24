// https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8/solutions/javascript

function removeParentheses(s) {

    let weirdCounter = 0
    const subtract = -1
    const add = 1
    const tracker = []

    const doCalc = (num) => {
        weirdCounter = weirdCounter + num
    }

    const makeDecision = (s) => {
        if(s === '(') {
            doCalc(subtract)
            return subtract
        }else if (s === ')') {
            doCalc(add)
            return add
        }else {return 'remove'}
    }

    for( let char of s ) {
        makeDecision(char)
        tracker.push( weirdCounter ? makeDecision(char) : null )
    }

    let isolateIndices = tracker.map( (curr, index) => {
        return ((typeof curr === 'number' || curr === 'remove') ? false : index)
    })
    isolateIndices = isolateIndices.filter(e=>{return e!==false})
    
    const newSentance = isolateIndices.map(e=> {
        return s[e]
    })

    return newSentance.join('')

}

// const s = "hello example (words(more words) here) something"
// const s = "(first group) (second group) (third group)"
const s = "a(b(c))"
console.log( removeParentheses(s) )
