// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b

String.prototype.isUpperCase = function() {

    return this == this.toUpperCase() ? true : false
}


const str = 'ACSKLDFJSG SKaLDFJSKLDFJ'

console.log(str.isUpperCase());