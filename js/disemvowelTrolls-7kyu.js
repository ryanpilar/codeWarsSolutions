// https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
    
    const vowels = ['a','e','i','o','u']
    const splitString = str.split('')

    const filtered = splitString.filter( e => {
        return vowels.indexOf( e.toLowerCase() ) === -1
    })

    return filtered.join('');
  }

  console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))