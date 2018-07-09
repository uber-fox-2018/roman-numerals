const toRoman = (number) => {
  const converter = {
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
  };


  let str = '';
  for (let i in converter){
    if (number >= converter[i]){
      let denominator = Math.floor(number / converter[i]);
      number -= denominator * converter[i];
      str += i.repeat(denominator);
      // console.log(i, denominator, str)
    }
  }

  return str;
}

console.log(toRoman(111))