function to_roman(num) {
    var roman = {
        'M'  : 1000,
        'CM' : 900,
        'D'  : 500,
        'CD' : 400,
        'C'  : 100,
        'XC' : 90,
        'L'  : 50,
        'XL' : 40,
        'X'  : 10,
        'IX' : 9,
        'IV' : 4,
        'I' : 1
    }

    var convert = ''
    while (num > 0){
        for(var key in roman){
            if(num >= roman[key]){
                convert += key
                num -= roman[key]
            }
        }
    }
    return convert
    // var hasil = ''
    // while(num > 0){
    //     if(num <= 3){
    //         hasil += 'I'
    //         num--
    //     }else if(num == 4){
    //         return hasil += 'IV'
    //     }else if(num >= 5 && num <= 8){
    //         hasil += 'V'
    //         num -= 5
    //     }else if(num === 9){
    //         return hasil += 'IX'
    //     }else if(num === 10){
    //         return hasil += 'X'
    //     }else if(num > 10 && num <= 39){
    //         hasil += 'X'
    //         num -= 10
    //     }else if(num >= 40 && num <= 49){
    //         hasil += 'XL'
    //         num -= 40
    //     }else if(num >= 50 && num <= 89){
    //         hasil += 'L'
    //         num -= 50
    //     }else if(num >= 90 && num <= 99){
    //         hasil += 'XC'
    //         num -= 90
    //     }else if(num >= 100 && num <= 399){
    //         hasil += 'C'
    //         num -= 100
    //     }else if(num >= 400 && num <= 499){
    //         hasil += 'CD'
    //         num -= 400
    //     }else if(num >= 500 && num <= 899){
    //         hasil += 'D'
    //         num -= 500
    //     }else if(num >= 900 && num <= 999){
    //         hasil += 'CM'
    //         num -= 900
    //     }else if(num >= 1000 && num <= 3999){
    //         hasil += 'M'
    //         num -= 1000
    //     }
    // }
    // return hasil

}

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))