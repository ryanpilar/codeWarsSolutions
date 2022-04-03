function solution(str){
    // https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

    // makek a list
    let arr = Array.from(str)
    let odd = undefined
    let triggered = false

    if(arr.length === 1) { return [(String(arr) + '_')] }

    if(!( arr.length % 2 === 0) ) {
        odd = String( arr.pop() ) + '_'
        triggered = true
    }

    let tempList = arr.slice(0)
    let doubles = []

    // let iterationsNeeded = arr.length / 2

    for (let i=0; i<(arr.length / 2); i++) {
        let hold = ''
        for(let round = 0; round<2; round++) {
            hold += String(tempList.shift())
        }
        doubles.push(hold)
    }

    if( triggered === true) { doubles.push(odd) }

    return doubles
}