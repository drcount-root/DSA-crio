var plusOne = function(n, digits) {
    for(let i = n - 1; i >= 0; i--) {
        digits[i]++;

        if( digits[i] > 9 ){
            digits[i] = 0;
        } else{
            return digits;
        }
    }

    digits.unshift(1);
    return digits;
};

console.log(plusOne(2, [9,9]));

console.log(plusOne(3, [1,5,2]));