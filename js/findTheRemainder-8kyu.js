function remainder(n, m) {
    // https://www.codewars.com/kata/524f5125ad9c12894e00003f

    // Divide the larger argument by the smaller argument and return the remainder
    let big   = undefined,
        small = undefined;
    // which one is big and small?
    if(n > m || n === m) {
        big = n
        small = m
    } else if (n < m) {
        big = m
        small = n
    } 

    // 0 edge case return what? NaN
    if (small === 0) {
        return NaN
    }

    // perform moduls
    return big % small
  }