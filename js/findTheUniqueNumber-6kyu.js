// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
    // loop over the first three
    let findSingle = {}
    let yoooo = undefined

    for( let i=0; i<3; i++ ) {
        findSingle[arr[i]] ? findSingle[arr[i]]++ : findSingle[arr[i]] = 1
    }

    const objLength = Object.keys(findSingle).length

    if(objLength === 1){ 
        arr.forEach( num => {

            if(  String(num) !== Object.keys(findSingle)[0] ) {
                yoooo = num
            } 
        })
    }
    else{
        for( param in findSingle ) {
            if(findSingle[param] < 2) {
                yoooo = param
            }
        }
    }
    return Number(yoooo)
}
  
// const arr = [ 1, 1, 0 ]  // 1);
// const arr = [ 0, 1, 0 ]  // 1);
// const arr = [ 0, 0, 1 ]  // 1);
// const arr = [ 1, 1, 1, 2, 1, 1 ]  // 2);
// const arr = [ 1, 1, 2, 1, 1 ]  // 2);
const arr = [ 3, 10, 3, 3, 3 ]  // 10);

console.log(findUniq(arr))