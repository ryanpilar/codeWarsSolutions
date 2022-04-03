const flip = (d, a) => {
    // https://www.codewars.com/kata/5f70c883e10f9e0001c89673

    if(d === 'L') {
        a.sort( (small, big) => {
            return big - small
        })

    } else if (d === 'R') {
        a.sort( (small, big) => { return small - big })}
    return a
   
}