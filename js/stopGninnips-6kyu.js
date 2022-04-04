function spinWords(string) {
    // https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

    // does the string have spaces?
    if( string.includes(' ') ) { 
      let newArray = string.split(' ')
      let aList = []
      
      newArray.forEach( e => {
        e.length > 4 ? aList.push(e.split('').reverse().join('')) : aList.push(e)
      })

      return aList.join(' ')
    }
    else {
      return string.length > 4 ? string.split('').reverse().join('') : string
    }
}

const string = "Seriously"
console.log( spinWords(string) )