// https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript

function correct(string) {

    return (
        string
            .split('')
            .map( char => {
                if      (char === '0'){ return 'O'}
                else if (char === '1'){ return 'I'}
                else if (char === '5'){ return 'S'}
                else return char
            })
            .join('')
    
)}

const string = '1F-RUDYARD K1PL1NG'
console.log(correct(string));