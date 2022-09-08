//  https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

function inArray(array1,array2){

    const confirmSub = []

    array1.forEach( a1Item => {
        array2.forEach( a2Item => {
            if ( a2Item.includes(a1Item) ) { 
                confirmSub.includes(a1Item) ? false : confirmSub.push(a1Item)
            }
        })
    })

    return confirmSub.sort()
}


const array1 = ["tarp", "mice", "bull"]
const array2 = ["lively", "alive", "harp", "sharp", "armstrong"]

console.log(inArray(array1,array2));