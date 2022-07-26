// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count (string) {  

    const occurance = {}

    string.split('').forEach( char => {

        if ( !occurance[char] ) {
            occurance[char] = 0
        }
        occurance[char]++
    })
    return occurance;
  }


  const string = ''
  console.log(count (string));