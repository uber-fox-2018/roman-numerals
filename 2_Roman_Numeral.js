function toRoman(num) {
    if (num > 3000) return `Invalid Number`


    let result = ''

    let data = [1000, 900, 500, 400, 100, 50, 40, 10, 9, 5, 4, 1]
    let roman = ['M', 'CM', 'D', 'CD', 'C', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

    for (let a = 0; a < data.length; a++) {
        if (num >= data[a]) {
            num -= data[a]
            a -= 1
            result += roman[a + 1]
        }
    }
    return result

}

console.log(toRoman(4));
console.log(toRoman(9))
console.log(toRoman(23))
console.log(toRoman(1453))
console.log(toRoman(1646))
