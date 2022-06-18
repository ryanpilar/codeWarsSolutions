// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

var number = function(busStops){
    let onBus = 0

    busStops.forEach( busStop => {
        onBus += busStop[0]
        onBus -= busStop[1]
    })

    return onBus
}


// const busStops = [[10,0],[3,5],[5,8]] // 5);
// const busStops = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]] // 17);

// const busStops = [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]] // 21);
const busStops = [[0,0]] // 0);

console.log(number(busStops))