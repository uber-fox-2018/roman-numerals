function toRoman(number){
    var result="";
    var numberInt = [5000,1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var numberRoman = ['v','M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

    for(var i = 0; i<=numberInt.length; i++){
        while(numberInt[i]<=number){
            result += numberRoman[i];
            number = number - numberInt[i];
        }
    }
    return result
}

// console.log(toRoman(300))

console.log('My totally sweet testing script\n')
console.log('input | expected | actual')
console.log('------|----------|-------')
console.log('4     |IV        |', toRoman(4))
console.log('9     |IX        |', toRoman(9))
console.log('23    |XXIII     |', toRoman(23))
console.log('1453  |MCDLIII   |', toRoman(1453))
console.log('1646  |MDCXLVI   |', toRoman(1646))
console.log('2547  |MMDXLVII  |', toRoman(2547))
console.log('3764  |MMMDCCLXIV|', toRoman(3764))
console.log('4523  |MMMMDXXIII|', toRoman(4523))
console.log('5628  |vDCXXVIII |', toRoman(5628))

