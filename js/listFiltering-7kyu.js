function filter_list(l) {
    // https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

    let aList = []
  
      for ( let element of l ) {
          if ( typeof(element) === 'number' ) {
              aList.push(element)
          }
      }
      return aList
  }