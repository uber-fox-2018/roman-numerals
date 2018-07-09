function toRoman (num){
    let angka = num
    let str = ''
    let arabic = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let roman = ['M','CM','D','CD','C','XC','L','IX','X','IX','V','IV','I']
    console.log(arabic.length)
    console.log(roman.length)
    for (let i = 0; i < arabic.length; i++){
        if (angka >= arabic[i]){
            angka -= arabic[i]
            str+=roman[i]
            i-=1
        }
    }
    return str
}


console.log(toRoman(1646))
