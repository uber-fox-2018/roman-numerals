function toRoman(num) {
    let kamusRomawi = {
        'M':1000,'D':500,'CD':400,'C':100,'L':50,'XL':40,'X':10,'IX':9,'V':5,'IV':4,'I':1
    }
    let result = ""

    for(var key in kamusRomawi){ //looping kamusRomawi
        // console.log(kamusRomawi[key])
        while(num >= kamusRomawi[key]) { // jika num lbih kecil sama dengan value dari kamus romawi, maka
            num = num - kamusRomawi[key]; // dia akan mengurangi
            result += key //jika hasilnya sama dengan 4, maka akan keluar key dari value 4, yaitu IV
        }

    }
    return result
}


console.log ('My tottaly sweet testing script\n');
console.log(' input  |  expected  |  actual ')
console.log('--------|------------|---------')
console.log(' 4      |  IV       |', toRoman(4))
console.log(' 9      |  IX       |', toRoman(9))
console.log(' 23     |  XXIII    |', toRoman(23))
console.log(' 1453   |  MCDLIII  |', toRoman(1453))
console.log(' 1646   |  MDCXLVI  |', toRoman(1646))