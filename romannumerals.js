function roman(num) {

  let romawi = [
    {simbol: 'M', nilai: 1000},
    {simbol: 'D', nilai: 500},
    {simbol: 'CD', nilai: 400},
    {simbol: 'C', nilai: 100},
    {simbol: 'XC', nilai: 90},
    {simbol: 'L', nilai: 50},
    {simbol: 'XL', nilai: 40},
    {simbol: 'X', nilai: 10},
    {simbol: 'IX', nilai: 9},
    {simbol: 'V', nilai: 5},
    {simbol: 'IV', nilai: 4},
    {simbol: 'I', nilai: 1}
  ];

  var result = '';
  for (let i = 0; i < romawi.length; i++) {
    for (let i1 = 0; i1 < romawi.length; i1++) {
      if (num >= romawi[i]['nilai']) {
        result += romawi[i]['simbol'];
        num -= romawi[i]['nilai'];
      }
    }
  }
  return result;
}



console.log(roman(4));
// IV
console.log(roman(9));
// IX
console.log(roman(29));
// // XXIX
console.log(roman(1453));
// // MCDLIII
console.log(roman(1646));
// MDCXLVI
