function divisors(integer) {
    // https://www.codewars.com/kata/544aed4c4a30184e960010f4
    
    const divisors = []

    for(let i=2; i <= (integer - 1); i++) {
        if(integer % i === 0) { divisors.push(i) }
    }
    return divisors.length === 0 ? `${integer} is prime` : divisors;
};