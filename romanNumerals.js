function toRoman(num){
	var roman=['M','D','CD','C','XC','L','XL','X','IX','V','IV','I']
	var angka = [1000, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
	var result=''
	for (var i = 0; i < angka.length ; i++){
		if (num >= angka[i]){
			num -= angka[i]
			result+=roman[i]
			i-=1
		}
	}
	return result
}

console.log(toRoman(4))
console.log(toRoman(9))
console.log(toRoman(23))
console.log(toRoman(1453))
console.log(toRoman(1646))
// console.log(toRoman(3000))

	// var toZero = true
	// var temp =''

	// while (toZero){
	// 	if (num >= 1000){
	// 		num -= 1000
	// 		temp +='M'
	// 	}else if (num >= 500 && num < 1000){
	// 		num -= 500
	// 		temp +='D'
	// 	}else if (num >= 100 && num < 500){
	// 		if (num >= 400){
	// 			num -= 400
	// 			temp += 'CD'
	// 		}else {
	// 			num -= 100
	// 			temp +='C'	
	// 		}
	// 	}else if (num >= 50 && num < 100){
	// 		if (num >= 90){
	// 			num -= 90
	// 			temp += 'XC'
	// 		}else {
	// 			num -= 50
	// 			temp +='L'
	// 		}
	// 	}else if (num >= 10 && num < 50){
	// 		if (num >= 40){
	// 			num -= 40
	// 			temp += 'XL'
	// 		}else {
	// 			num -= 10
	// 			temp +='X'		
	// 		}
	// 	}else{
	// 		if (num >= 9){
	// 			num -= 9
	// 			temp += 'IX'
	// 		}else if (num >= 5){
	// 			num -= 5
	// 			temp += 'V'
	// 		}else {
	// 			if (num >= 4){
	// 				num -= 4
	// 				temp +='IV'
	// 			}else {
	// 				num -= 1
	// 				temp +='I'
	// 			}
	// 		}
	// 	}
	// 	if (num == 0){
	// 		return temp
	// 	}
		
	// }