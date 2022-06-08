// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag (str) {


    const lst = str.split(' ')
    const hashTag = []


    for( let i=0; i< lst.length; i++) {

        if(lst[i] === ''){ console.log('got one')}
        else {
                const splity = lst[i].split('').map( (char, index)=> {

                    if(index===0){ return `${char.toUpperCase()}`}
                    if(char=== ' ') {return }
                    else {return char}
                })
                hashTag.push(splity.join(''))
           
        }
    }
    const final = hashTag.join('')
    if (final === ''){return false}
    
    return final===undefined || final.length<140 ? `#${final}` : false

}


const str = "" // false, "Expected an empty string to return false")
// const str = " ".repeat(200) // false, "Still an empty string")
// const str = "Do We have A Hashtag" // "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
// const str = "Codewars" // "#Codewars", "Should handle a single word.")
// const str = "Codewars Is nice" // "#CodewarsIsNice", "Should remove spaces.")
// const str = "Codewars is nice" // "#CodewarsIsNice", "Should capitalize first letters of words.")
// const str = "code" + " ".repeat(140) + "wars" // "#CodeWars")
// const str = "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat" // false, "Should return false if the final word is longer than 140 chars.")
// const str = "a".repeat(139) // "#A" + "a".repeat(138), "Should work")
// const str = "a".repeat(140) // false, "Too long")

console.log(generateHashtag (str))