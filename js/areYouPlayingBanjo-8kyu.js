// https://www.codewars.com/kata/53af2b8861023f1d88000832

function areYouPlayingBanjo(name) {
    // Implement me
    
    return name[0].toLowerCase() === 'r' ? `${name} plays banjo`: `${name} does not play banjo`
}

const name = 'Ayan'
console.log(areYouPlayingBanjo(name))