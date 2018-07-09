function toRoman(num){
    let decimal= [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman =["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "VI", "I"];
    let result = "";
    for(let i=0;i<decimal.length;i++){
        while(decimal[i] <= num){
            result += roman[i];
            num -= decimal[i];
        }
    }
    return result;
}
console.log(toRoman(1));//I
console.log(toRoman(5));//V
console.log(toRoman(10));//X
console.log(toRoman(50));//L
console.log(toRoman(100));//C
console.log(toRoman(500));//D
console.log(toRoman(1000));//M
console.log(toRoman(23));//XXIII
console.log(toRoman(1453));//MCDLIII
console.log(toRoman(1646));//MDCXLVI
console.log(toRoman(2999));//MMCMXCIX
console.log(toRoman(3000));//MMM
