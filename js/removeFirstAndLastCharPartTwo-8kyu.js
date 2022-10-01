// https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

function array(arr) {

    const splitted = arr.split(',')

    if (splitted.length > 2) {
        splitted.pop()
        splitted.shift()
        return splitted.join(' ')

    } else { return null }

}

const arr = '1,2,3'
console.log(array(arr));