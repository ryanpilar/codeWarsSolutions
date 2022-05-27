// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
function toCamelCase(str) {

    let delimiter 

    // is it deliminated by '-' or '_'?
    if( str.indexOf('-') !== -1 ) { delimiter = '-' }
    else if( str.indexOf('_') !== -1 ) { delimiter = '_' } 

    // if no deliminater resolve to false
    const makeSplit = delimiter ? str.split(`${delimiter}`) : false
    
    // make the camelCase
    const makeCamel = (arr) => {

        firstElement = arr.shift()
        const capitalized = arr.map( word => {
            const superSized = word.charAt(0).toUpperCase()
            const slicedWord = word.slice(1)

            return `${superSized}${slicedWord}`
        })

        capitalized.unshift(firstElement)
        return capitalized
    }
    // handle the emtpy edge case
    return makeSplit ? makeCamel(makeSplit).join('') : ''

}

const str = 'aA-Ff-gg-hhh'   // '', "An empty string was provided but not returned")
// const str = "the_stealth_warrior"   // "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
// const str = "The-Stealth-Warrior"   // "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
// const str = ''
console.log( toCamelCase(str))