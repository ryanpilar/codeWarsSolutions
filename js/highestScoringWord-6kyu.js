// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const scores = {}

    // make alphabet score obj
    alphabet.split('').forEach( (char, index) => scores[char] = index + 1 )

    let currentChamp = ['', 0]

    x.split(' ').forEach( word => {
        let score = calcScore(scores, word)
        if ( score > currentChamp[1]) {currentChamp = [word, score]}
        
    })
    return currentChamp[0]
}

function calcScore(scores, word) {
    let counter = 0
    word.split('').forEach( letter => {
        counter = counter + scores[letter]
    })
    return counter
}

const x = "dovtnrxuvurgmojvgtkyrzcqyclhxxb wzoafpybusbretmbrjlngfnhdgrvqou zncnykrxitqzuujczmmbwfhvywyemjk ayqzmjdtuesfpndamocagljsaneqppt"
console.log(high(x));