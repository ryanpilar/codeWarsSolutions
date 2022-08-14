// https://www.codewars.com/kata/5aff237c578a14752d0035ae/
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    // your code

    const ageList = [age1, age2, age3, age4, age5, age6, age7, age8]

    return Math.trunc( Math.sqrt( ageList.map( age => age * age ).reduce( (total, current) => { return total+current }, 0)) / 2 )
}

console.log( predictAge(65,60,75,55,60,63,64,45) )