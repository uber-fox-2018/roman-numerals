function toRoman(input) {
    let roman = {
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
      I: 1
    }

    let result = ''
    for(let i in roman){
        while(input >= roman[i]){
            result += i;
            input -= roman[i];
        }
    }
    return result
}

// console.log(toRoman(7))


// console.log('My totally sweet testing script\n');
// console.log('input | expected | actual');
// console.log('______|__________|_________');
// console.log('4     |IV        |', toRoman(4));
// console.log('9     |IX        |', toRoman(9));
// console.log('23    |XXIII     |', toRoman(23));
// console.log('1453  |MCDLIII   |', toRoman(1453));
// console.log('1646  |MCDXLVI   |', toRoman(1646));

function toRomanArray (input) {
    let roman = [
        ["M",1000],
        ["CM",900],
        ["D",500],
        ["CD",400],
        ["C",100],
        ["L", 50],
        ["XL",40], 
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ]

    let result = '';
    for(i=0; i<roman.length; i++){
        while(input >= roman[i][1]){
            result += roman[i][0];
            input -= roman[i][1];
        }
        // console.log(roman[i][1])
        // console.log(roman[i][0])
    }
    return result
}

// console.log(toRomanArray(7))

console.log('My totally sweet testing script\n');
console.log('input | expected | actual');
console.log('______|__________|_________');
console.log('4     |IV        |', toRoman(4));
console.log('9     |IX        |', toRoman(9));
console.log('23    |XXIII     |', toRoman(23));
console.log('1453  |MCDLIII   |', toRoman(1453));
console.log('1646  |MCDXLVI   |', toRoman(1646));

