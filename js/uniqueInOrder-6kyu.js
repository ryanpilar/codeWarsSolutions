
// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
var uniqueInOrder=function(iterable){
    const newList = []
    
    for( element of iterable ) {
        element === newList[newList.length-1] ? false : newList.push(element)
    }
    return newList
}


// const iterable = 'AAAABBBCCDAABBBL' // ['A', 'B', 'C', 'D', 'A', 'B']
 const iterable = 'ABBCcAD' // ['A', 'B', 'C', 'c', 'A', 'D']
//  const iterable = [1,2,2,3,3] // [1,2,3]
// const iterable = [{a:3},{a:3},{a:2}]

console.log(uniqueInOrder(iterable))