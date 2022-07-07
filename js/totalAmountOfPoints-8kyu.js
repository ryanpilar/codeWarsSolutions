// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

function points(games) {

    let counter = 0

    games.forEach( game => {
        const [x, y] = game.split(':').map( num=> +num )
        
        if( x > y) { counter += 3 }
        else if ( x < y ) {}
        else if ( x === y ) { counter++ }
        else {
            console.log('error in conditionals')
        }
    })

    return counter
}

// const games = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]  
// const games = ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]
// const games = ["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]
// const games = ["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]
const games = ["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]

console.log(points(games))