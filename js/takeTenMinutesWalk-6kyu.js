// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {

    let counter = 0
    const directions = {
        x: 0,
        y: 0
    }
    function changeDirection(coordinate) {
        coordinate === 'n' ? directions['y']++ : false
        coordinate === 's' ? directions['y']-- : false
        coordinate === 'e' ? directions['x']++ : false
        coordinate === 'w' ? directions['x']-- : false
    }
    for( coordinate of walk ){
        counter++
        changeDirection(coordinate)
    }
    return counter === 10 && directions.x === 0 && directions.y === 0  
    
}
// const walk = ['n','s','n','s','n','s','n','s','n','s']   //  'should return true');
// const walk = ['w','e','w','e','w','e','w','e','w','e','w','e']   //  'should return false');
// const walk = ['w']   //  'should return false');
const walk = ['n','n','n','s','n','s','n','s','n','s']   //  'should return false');

console.log(isValidWalk(walk))