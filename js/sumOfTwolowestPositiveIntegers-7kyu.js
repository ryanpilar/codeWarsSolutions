// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

function sumTwoSmallestNumbers(numbers) {  

    const sorted = numbers.sort(function(a, b) {
        return a - b;
    });
    return sorted[0] + sorted[1]

  }





// const numbers =  [5, 8, 12, 19, 22] // 13     );
// const numbers =  [15, 28, 4, 2, 43] // 6      
// const numbers =  [3, 87, 45, 12, 7] // 10     );
// const numbers = [23, 71, 33, 82, 1] // 24     );
// const numbers = [52, 76, 14, 12, 4] // 16     );

console.log(sumTwoSmallestNumbers(numbers) )