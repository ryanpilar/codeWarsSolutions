snail = function(array) {
    // https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
    
    const numList = []
    let arrayCopy = array.slice(0)
    let masterList = []

    while ( arrayCopy.length > 0 ) {
        // take out the first row and push to masterList
        arrayCopy.shift().forEach( element => {
            masterList.push( element )
        })

        // for the remaining arrays, for loop it and pop their list
        if( arrayCopy.length > 0 ) {
            let poppedArrays = arrayCopy.map( element => {
                return element.pop()
            })
            poppedArrays.forEach( element => masterList.push(element) )
        }

        // pop() arrayCopy, reverse the order and push to master
        if( arrayCopy.length > 0 ) {
            let poppedArray = arrayCopy.pop().reverse()
            poppedArray.forEach( element => masterList.push(element))
        }
        
        // for remaining arrays, for loop it and shift() their list,
        //     - reverse() order and push to master
        if( arrayCopy.length > 0 ) {
            let poppedArrays = arrayCopy.map( element => element.shift() )
            poppedArrays.reverse().forEach( element => masterList.push(element) )
        }
    }
    return masterList
}