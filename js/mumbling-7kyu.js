function accum(s) {
	// your code

    /**
        p: a string of alphabet characters
            - can be capitalized or not

        r: a string
            - seperated by '-' hyphens
            - and add n lowercase duplicaes to the single char

        
     */

    // to lowercase everything
    const lowercaseStr = s.toLowerCase();

    // split the chars and make an array
    const strArray = lowercaseStr.split('')
    // console.log('strArray:', strArray)

    const duplicate = strArray.map( (char, index) => {
        // console.log('char:', char, 'index:', index)
        const newArr = [char]
        for(let i=0; i<index; i++) {
            newArr.push(char)
        }
        
        newArr[0] = newArr[0].toUpperCase()
        return newArr.join('')
    })
    return duplicate.join('-')

    // add char duplates to every list element

    // capitalize the 0th position of every list element

    // join together using '-' hyphens
}



const s = "ZpglnRxqenU" // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
// const s = "NyffsGeyylB" // "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
// const s = "MjtkuBovqrU" // "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
// const s = "EvidjUnokmM" // "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
// const s = "HbideVbxncC" // "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cconst s =  // 

console.log(accum(s))