// https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript
function dontGiveMeFive(start, end) {
    let theCount = []
    
    for(let i = start; i <= end; i++) {
        
        if(!String(i).includes('5')) theCount.push(i)

    }
    console.log('thecount', theCount)

    return theCount.length
}

console.log(dontGiveMeFive(4, 17))