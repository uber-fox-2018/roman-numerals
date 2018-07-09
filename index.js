function romanNumerals(number){
   let romans = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
   }
   let output = '';

   for (const i in romans) {
       while (number >= romans[i]) {
          output += i
          number -= romans[i]
       }
   }
   return output
}

console.log(romanNumerals(4));
console.log(romanNumerals(9));
console.log(romanNumerals(23));
console.log(romanNumerals(1453));
console.log(romanNumerals(1646));

// ==================================== CARA 2 =================================

function romanNumeralsArray(number){
    let romans = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']]
    let i = 0;
    let output = '';

    while (number > 0) {
        if (number >= romans[i][0]) {
           output += romans[i][1]
           number -= romans[i][0] 
        }else if (number < romans[i][0]) {
           i++ 
        }
    }
    return output
}

console.log(romanNumeralsArray(4));
console.log(romanNumeralsArray(9));
console.log(romanNumeralsArray(23));
console.log(romanNumeralsArray(1453));
console.log(romanNumeralsArray(1646));




