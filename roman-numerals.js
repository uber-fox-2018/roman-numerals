// masih dalam tahap penyelesaian
function toRoman(num){
    
    let numbers = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
    let roman = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M']
    
    numbers.reverse()
    roman.reverse()

    // first way loop
    // let remains = num
    // let buffer = []
    // for(let i = 0; i < numbers.length; i++) {
    //   if(remains - numbers[i] >= 0){
    //     buffer.push(roman[i])
    //     remains = remains - numbers[i]
    //     i--
    //   }
    // }

    // var result = buffer.join('')

    // return result

    let result = ''
    let remains = num
    for(let i = 0; i < numbers.length; i++){
      for(let j = 0; j < numbers.length; j++){
        if(remains - numbers[i] >= 0){
          result += roman[i]
          remains = remains - numbers[i]
        }
      }
    }

    return result

}

console.log('My totally sweet testing script\n')
console.log('input | expected | actual')
console.log('------|----------|--------')
console.log('4     | IV       |', toRoman(4))
console.log('9     | IX       |', toRoman(9))
console.log('23    | XXIII    |', toRoman(23))
console.log('1453  | MCDLIII  |', toRoman(1453))
console.log('1646  | MDCXLVI  |', toRoman(1646))