// filter out even & odd numbers from a given array without using modulo operator & conditions

// by using bitwise operator
// In JavaScript, a number can be represented in binary format. The least significant bit of a binary number is the rightmost bit. If it's 0, the number is even. If it's 1, the number is odd.

const num_arr = [1, 5, 8, 7, 4, 9, 2, 3, 6];


const evenOddFinder = num => {
    return (num & 1) ? 'odd' : 'even';
}


num_arr.forEach(item => {
    console.log(item + ' -> ' + evenOddFinder(item));
})