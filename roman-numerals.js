// panduan untuk angka romawi ada di : https://id.wikipedia.org/wiki/Angka_Romawi

function toRoman(num) {
    let angka = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    let roma = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    let hasil = '';

    for(let i = angka.length; i >= 0; i--) {
		while(num >= angka[i]) {
			num = num - angka[i];
			hasil = hasil + roma[i];
		} 
	}
	
	return hasil;

}
           
console.log('My totally sweet testing script\n');
console.log('input | expected | actual');
console.log('______|__________|_______');
console.log('4     | IV       |', toRoman(4));
console.log('9     | IX       |', toRoman(9));
console.log('23    | XXIII    |', toRoman(23));
console.log('1453  | MCDLIII  |', toRoman(1453));
console.log('1646  | MDCXLVI  |', toRoman(1646));