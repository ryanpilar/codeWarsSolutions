// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

function firstNonConsecutive (arr) {
    console.log(arr);
    if (arr === [] || arr.length < 2) return null

    let findIt = arr.map( (num, index) => {
        if (index == 0) {return false}
        if (num === ( arr[index-1] + 1) ) {return false}
        else {return num}
    })

    findIt = findIt.filter( num => typeof(num) === 'number')
    if (findIt.length == 0 || findIt == 'undefined') return null
    


    
    else {
        console.log(findIt)
        return findIt[0]
}
    
}

const arr = [1,2,3,4,6]
console.log(firstNonConsecutive(arr));