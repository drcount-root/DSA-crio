// Input: 'hElLo woRlD'
// Output: 'Hello World'

const stringManipFunc = str => {
    const arrStr = str.toLowerCase().split(' ');
    // let result = '';
    for (let i in arrStr) {
      // result += arrStr[i][0].toUpperCase() + arrStr[i].substr(1) + ' ';
      arrStr[i] = arrStr[i][0].toUpperCase() + arrStr[i].substr(1);
    }
    // return result; // length => 13
    return arrStr.join(' '); // length => 12
  }
  
console.log(stringManipFunc('hELlo SubHaM'));