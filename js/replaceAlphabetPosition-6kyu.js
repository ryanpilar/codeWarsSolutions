// https://www.codewars.com/kata/546f922b54af40e1e90001da/solutions/javascript
function alphabetPosition(text) {

    const buildText = []

    const alphabet = {
        a: 1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10,
        k:11, l:12, m:13, n:14, o:15, p:16, q:17, r:18, s:19,
        t:20, u:21, v:22, w:23, x:24, y:25, z:26
    }
    for( letter of text.toLowerCase() ) {
        console.log(letter)
        alphabet[letter] ?
            buildText.push( alphabet[letter] ) :
            false
    }
    return buildText.join(' ');
}

// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
// const text = "The sunset sets at twelve o' clock." 

// "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
const text = "The narwhal bacons at midnight." 

console.log(alphabetPosition(text))
  