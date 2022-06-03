
// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript
function dirReduc(arr){

    const coordinateTruths = {
        'NORTH': {'NORTH':true, 'SOUTH':false, 'EAST':true, 'WEST':true} ,
        'SOUTH': {'NORTH':false, 'SOUTH':true, 'EAST':true, 'WEST':true},
        'EAST': {'NORTH':true, 'SOUTH':true, 'EAST':true, 'WEST':false},
        'WEST': {'NORTH':true, 'SOUTH':true, 'EAST':false, 'WEST':true},
    }

    const newDirections = []

    arr.forEach( (pos, index) => {

        const lastPos = newDirections[newDirections.length-1]

        let checkTruth = coordinateTruths[lastPos] ? coordinateTruths[lastPos][pos] : undefined 

        if (checkTruth === undefined) {newDirections.push(pos)}
        else if (checkTruth) {newDirections.push(pos)}
        else {newDirections.pop()}

    })

    return newDirections

}


// const arr = ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]
// []

const arr = ["NORTH", "WEST", "SOUTH", "EAST"]
// ["NORTH", "WEST", "SOUTH", "EAST"]

// const arr = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
// ["WEST"]

console.log(dirReduc(arr))