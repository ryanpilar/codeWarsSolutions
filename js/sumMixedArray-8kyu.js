// https://www.codewars.com/kata/57eaeb9578748ff92a000009

function sumMix(x){

    return  (
        x.reduce( (previous, current) => Number(previous) + Number(current), 0 )
    )
}

const x = ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']
console.log(sumMix(x));