function solution(number){
    //https://www.codewars.com/kata/514b92a657cdc65150000006

    let aList = []
    if( number < 0 ) { return 0 }

    for( let i = 0; i < number; i++) {
        if( i % 3 === 0 && i % 5 === 0 ) { aList.push(i) }
        else if ( i % 3 === 0 || i % 5 === 0 ) { aList.push(i) }
    }
    if( aList.length === 0 ) { return 0 }
    
    return aList.reduce( (a,b) => a+b )
} 