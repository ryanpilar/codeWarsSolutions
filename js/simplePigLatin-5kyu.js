function pigIt(str){
    //Code here
    const splitWords = str.split(' ')

    const pigged = []

    for( let word of splitWords ) {

        const aList = word.split('')
        const firstLetter = aList.shift()

        if( firstLetter === '!') { pigged.push(word) }
        else {
            aList.push(firstLetter)
            word = aList.join('') + 'ay'
            pigged.push(word)
        }

        

    }

    return pigged.join(' ')
  }


const str = 'This is my string Pa!'
console.log(pigIt(str))