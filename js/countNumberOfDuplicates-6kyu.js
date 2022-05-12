// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

function duplicateCount(text) {
    //... create an object to store all letter occurances
    const duplicates = {}
    let count = 0

    text.split('').forEach( e => {
        const lowerCased = e.toString().toLowerCase()

        if( duplicates[lowerCased] ) { 
            duplicates[lowerCased]++
        } 
        else { duplicates[lowerCased] = 1 }
    })

    for (let item in duplicates) {
        duplicates[item] > 1 ? count++ : false
    }
    return count
}

// const text = "Indivisibilities"
// duplicateCount(text)
// console.log( duplicateCount(text) )
