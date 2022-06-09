// https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions/javascript
function XO(str) {

    const xO = {
        'x' : 0,
        'o' : 0
    }

    for(char of str) {

        let lowerCasedChar = char.toLowerCase()
        if(lowerCasedChar === 'x' || lowerCasedChar === 'o') {
            xO[lowerCasedChar]++
        }
    }
    return xO['x'] === xO['o'] 
}

// const str = 'xO-oX'  // true);
// const str = "xxOo"  // true);
// const str = "xxxm"  // false);
// const str = "Oo"  // false);
const str = "ooom"  // false);
// const str = "oxh5-" // true

console.log(XO(str))