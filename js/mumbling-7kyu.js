// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {

    const lowercaseStr = s.toLowerCase();
    const strArray = lowercaseStr.split('')

    const duplicate = strArray.map( (char, index) => {
        const newArr = [char]
        for(let i=0; i<index; i++) {
            newArr.push(char)
        }
        newArr[0] = newArr[0].toUpperCase()
        return newArr.join('')
    })
    return duplicate.join('-')
}

const s = "ZpglnRxqenU" // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
// const s = "NyffsGeyylB" // "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
// const s = "MjtkuBovqrU" // "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
// const s = "EvidjUnokmM" // "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
// const s = "HbideVbxncC" // "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cconst s =  // 

console.log(accum(s))