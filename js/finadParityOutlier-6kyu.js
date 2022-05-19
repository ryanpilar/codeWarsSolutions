function findOutlier(integers){
    // in the first three entries are there for odds or evens?
    const quickTally = {
        odd: 0,
        even: 0
    }
    let findSolo

    integers.forEach( (current, index)  => {
        index < 3 ? 
        (current % 2 === 0 ? quickTally.even++ : quickTally.odd++) : false
    })
    // which property has the largest integer value?
    const decide = quickTally.odd < quickTally.even ? 'lookOdd' : 'lookEven'



    // if lookOdd
    if (decide === 'lookOdd') {
        findSolo = integers.filter( e => e % 2 !== 0 )
    } else {
        findSolo = integers.filter( e => e % 2 === 0 )
    }

    return findSolo[0]
    

}
const integers = [160, 3, 1719, 19, 11, 13, -21]
console.log('findOutlier(integers)', findOutlier(integers))