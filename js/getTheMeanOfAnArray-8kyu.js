// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){

    const sumMarks = marks.reduce( (sum, current) => {return sum + current}, 0)
    return Math.floor(sumMarks / marks.length)
}

const marks = [1,1,1,1,1,1,1,2]
console.log(getAverage(marks));