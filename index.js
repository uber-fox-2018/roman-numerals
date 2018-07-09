// function to_roman(num) {
//     let latinNum = [1, 4, 5, 9, 10, 40, 50, 100, 400, 500, 900, 1000]
//     let romanNum = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'C', 'CD', 'D', 'CM', 'M']

//     let result = ''
//     for (let i = latinNum.length-1; i >= 0; i--) {
//         //console.log(latinNum[i])
//         while (num >= latinNum[i]) {
//             result += romanNum[i]
//             num -= latinNum[i]
//             //console.log(result)
//         }
//     }
//     return result
// }

function to_roman(num) {
    let roman_numerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I:1
    }

    let result = ''
    for (let i in roman_numerals) {
        while(num >= roman_numerals[i]) {
            result += i
            num -= roman_numerals[i]
        }
    }
    return result
}

// Drive code
// console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))