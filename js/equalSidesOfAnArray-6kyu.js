
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

function findEvenIndex(arr) {

    // evenIndex will change when it finds and even index
    let evenIndex = -1

    function doAdd(arr)  {
        return arr.reduce((total, currentValue) => (total + currentValue), 0)
    }

    for( let i=0; i<arr.length; i++) {

        let leftAdd = 0
        let rightAdd = 0

        // take the ith index, and caluclate the sum of the arrs integers from ith + n, onwards
        const leftSide = arr.slice(0, i)
        const leftSum = doAdd(leftSide)

        // take the ith index, and calculate the sum of integers from ith  -n, to the start
        const rightSide = arr.slice(i+1, arr.length)
        const rightSum = doAdd(rightSide)

        // conditional to check if leftAdd === rightAdd, return index if true
        if(leftSum === rightSum) {return i}
    }
    return evenIndex
}

// const arr = [1,2,3,4,3,2,1]  // 3, "The array was: [1,2,3,4,3,2,1] \n");
// const arr = [1,100,50,-51,1,1]  // 1, "The array was: [1,100,50,-51,1,1] \n");
// const arr = [1,2,3,4,5,6]  // -1, "The array was: [1,2,3,4,5,6] \n");
// const arr = [20,10,30,10,10,15,35]  // 3, "The array was: [20,10,30,10,10,15,35] \n"
// const arr = [] // should return, -1
const arr = [0] // should return, -1
// can there be multiple answers?

console.log(findEvenIndex(arr))