// https://www.codewars.com/kata/5547929140907378f9000039/train/javascript

function shortcut (string) {
    return string
        .split('')
        .filter( char => ! ['a','e','i','o','u'].includes(char) )
        .join('')
  }

const string = 'how are you today?'
console.log(shortcut (string));