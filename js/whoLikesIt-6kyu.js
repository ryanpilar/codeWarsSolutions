
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/solutions/javascript
function likes(names) {

    const groupSize = names.length

    if (groupSize === 1) { return `${names} likes this` }
    else if (groupSize === 2) { return `${names[0]} and ${names[1]} like this` }
    else if (groupSize >= 3) { return `${names[0]}, ${names[1]} and ${groupSize === 3 ? names[2] : `${groupSize - 2} others`} like this` }
    else { return `no one likes this` } 
}


// const names = [] // 'no one likes this');
// const names = ['Peter'] // 'Peter likes this');
// const names = ['Jacob', 'Alex'] // 'Jacob and Alex like this');
const names = ['Max', 'John', 'Mark'] // 'Max, John and Mark like this');
// const names = ['Alex', 'Jacob', 'Mark', 'Max', 'Ryan'] // 'Alex, Jacob and 2 others like this');   
console.log(likes(names))