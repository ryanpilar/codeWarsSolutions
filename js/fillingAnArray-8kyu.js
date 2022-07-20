// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

const arr = N => {
    
    const newArray = []
    for (let i=0; i<N; i++) {
        newArray.push(i)
    }
    return newArray

}

console.log(arr(0));