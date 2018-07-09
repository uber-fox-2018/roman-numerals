function toRoman(number) {
    const roman1 = 'I';
    const roman4 = 'IV';
    const roman5 = 'V';
    const roman9 = 'IX'
    const roman10 = 'X';
    const roman40 = 'XL'
    const roman50 = 'L';
    const roman90 = 'XC'
    const roman100 = 'C';
    const roman400 = 'CD';
    const roman500 = 'D';
    const roman900 = 'CM';
    const roman1000 = 'M';

    let result = [];

    while(number > 0) {
        if(number <= 3000 && number >= 1000) {
            result.push(roman1000);
            number -= 1000;
        }
        else if(number < 1000 && number >= 900) {
            result.push(roman900);
            number -= 900;
        }
        else if(number < 900 & number >= 500) {
            result.push(roman500);
            number -= 500;
        }
        else if(number < 500 && number >= 400) {
            result.push(roman400);
            number -= 400;
        }
        else if(number < 400 && number >= 100) {
            result.push(roman100);
            number -= 100;
        }
        else if(number < 100 && number >= 90) {
            result.push(roman90);
            number -= 90;
        }
        else if(number < 90 && number >= 50) {
            result.push(roman50);
            number -= 50;
        }
        else if(number < 50 && number >= 40) {
            result.push(roman40);
            number -= 40;
        }
        else if(number < 40 && number >= 10) {
            result.push(roman10);
            number -= 10;
        }
        else if(number === 9) {
            result.push(roman9);
            number -= 9;
        }
        else if(number < 9 && number >= 5) {
            result.push(roman5);
            number -= 5;
        }
        else if(number == 4) {
            result.push(roman4);
            number -= 4;
        }
        else if(number < 4 && number >= 1) {
            result.push(roman1);
            number -= 1;
        }
    }
    
    return result.join('');
}