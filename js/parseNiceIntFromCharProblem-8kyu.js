function getAge(inputString){
    // https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1
    let arr = Array.from(inputString)
    let nums = arr.filter(element => Number(element) ? element : false)
    return Number(nums.pop())
    }