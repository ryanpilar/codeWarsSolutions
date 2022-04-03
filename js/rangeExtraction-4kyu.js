function solution(list){
    // https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

    const bundles = []
    let likeNums = []

    for( num of list ) {
        
        // if empty add
        if( likeNums.length === 0 ) { likeNums.push(num) }
        
        // is num a single increment of the previous?
        else if( likeNums.slice(-1)[0] === num - 1 ) { likeNums.push(num) }

        else { 
            bundles.push(likeNums.slice(0))
            likeNums = [num]
        }
    }
    // add whatever final bundle to bundles
    bundles.push(likeNums)

    let newArray = bundles.map( element => {
        return (
            element.length > 2 ? `${element.shift()}-${element.pop()}`: element
        )
    })
    return newArray.join(',')
}