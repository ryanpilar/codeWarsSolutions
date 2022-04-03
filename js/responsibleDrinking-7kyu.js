function hydrate(s) {
    // https://www.codewars.com/kata/5aee86c5783bb432cd000018
    
    aList = [1,2,3,4,5,6,7,8,9]
    counter = 0
  
    for(let char of s) {
        let num = Number(char)
        let hold = aList.indexOf(num)
  
        if (hold != -1) {
            counter += num
        }
    }
  
    if( counter > 1 ) {
        return `${counter} glasses of water`
    } else {
        return`${counter} glass of water`
    }
  }