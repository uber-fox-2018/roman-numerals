function toRoman(angka) {

    var arr= []
    var deret= 'MDCLXV'
    
    
    while (angka >= 1000) {
        arr.push('M')
        angka= angka-1000

        
    }

    counter=4
    while (angka >= 500) {
        arr.push('D')
        angka= angka-500
        counter--
        if (counter=0) {
            arr.splice(arr.length-4, 4)
            arr.push ('C','M')
        }
    }


    counter=4 
    while (angka >= 100) {
        arr.push('C')
        angka= angka-100
        counter--
        if (counter=0) {
            arr.splice(arr.length-4, 4)
            arr.push ('C','D')
        }
    }



    counter= 4
    while (angka >= 50) {
        arr.push('L')
        angka= angka-50
        counter--
        if (counter=0) {
            arr.splice(arr.length-4, 4)
            arr.push ('X','C')
        }
    }


    counter= 4
    while (angka >= 10) {
        arr.push('X')
        angka= angka-10
        counter--
        if (counter=0) {
            arr.splice(arr.length-4, 4)
            arr.push ('X','L')
        }
    }


    counter= 4
    while (angka >= 5) {
        arr.push('V')
        angka= angka-5
        counter--
        if (counter=0) {
            arr.splice(arr.length-4, 4)
            arr.push ('I','X')
        }
    }

 
    counter= 4
    while (angka > 0) {
        arr.push('I')
        angka= angka-1
        counter--
        if (counter=0) {
            arr.splice(arr.length-4, 4)
            arr.push ('I','V')
        }
    }

    return arr

}


console.log (toRoman(4))
console.log (toRoman(9))
console.log (toRoman(23))
console.log (toRoman(1453))
console.log (toRoman(1646))

