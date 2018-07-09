function romawi (param){
    var tampung = []
    var angka = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    var romawi = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    
    for (var i=0 ; i < angka.length ; i++){
      for (var j=0 ; j < romawi.length; j++){
      if (param >= angka[angka.length -1 -j]){
        param -= angka[angka.length -1 -j]
        tampung.push(romawi[romawi.length -1 -j])
        break;
      }
    }
  }
    return tampung.join('')
  }
  
  console.log('4   |IV    |',romawi(4)) //IV
  console.log('9   |IX    |',romawi(9)) //IX
  console.log('23   |XXIII    |',romawi(23)) //XXIII
  console.log('1453   |MCDLIII    |',romawi(1453)) //'MCDLIII'
  console.log('1646   |MDCXLVI    |',romawi(1646)) //MDCXLVI