// https://www.codewars.com/kata/57f222ce69e09c3630000212

function well(x){
    
    let counter = 0
    x.forEach( word => word === 'good' ? counter++ : false )

    if ( counter > 2 ) return 'I smell a series!'
    else if ( counter <= 2 && counter > 0 ) return 'Publish!'
    else return 'Fail!'
}

const x = ["bad","bad","bad","good","good","bad","bad","bad","bad"]
console.log(well(x));