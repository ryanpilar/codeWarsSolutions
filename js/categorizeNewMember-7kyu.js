// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

function openOrSenior(data){
    return data.map( person => person[0] >= 55 && person[1] > 7 ? 'Senior' : 'Open' )
}

// const data = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]] // ["Open", "Open", "Senior", "Open", "Open", "Senior"]
// const data = [[45, 12],[55,21],[19, -2],[104, 20]]  // ['Open', 'Senior', 'Open', 'Senior'])
// const data = [[3, 12],[55,1],[91, -2],[53, 23]]  // ['Open', 'Open', 'Open', 'Open'])
// const data = [[59, 12],[55,-1],[12, -2],[12, 12]]  // ['Senior', 'Open', 'Open', 'Open'])

console.log(openOrSenior(data))