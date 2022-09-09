// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript

function monkeyCount(n) {
    const newList = []
    for( let i = 1; i <= n ; i++ ) {
        newList.push(i)
    }
    return newList
}

const n = 20
console.log(monkeyCount(n));

