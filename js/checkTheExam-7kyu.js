//  https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

function checkExam(array1, array2) {

    let counter = 0
    array2.forEach( (studentAnswer, index) => {
    
        if (studentAnswer === array1[index]) { counter+=4}
        else if ( studentAnswer === '' ) {}
        else { counter-=1 }
    })
    return counter > 0 ? counter : 0
}

const array1 = []
const array2 = []
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]));