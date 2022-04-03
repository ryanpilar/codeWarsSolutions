function moveZeros(arr) {
    // https://www.codewars.com/kata/52597aa56021e91c93000cb0
    const start = [],
          end   = []

    arr.forEach( num => {
        num !== 0 ? start.push(num) : end.push(num)
    })
    // for( num of arr) {
    //     num !== 0 ? start.push(num) : end.push(num); }

    return start.concat(end)
}