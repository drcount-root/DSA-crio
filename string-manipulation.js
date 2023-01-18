const str = 'hElLo suBHaM';

const manipulate = str => {

    const strArr = str.toLowerCase().split(" ");
    // [ 'hello', 'subham' ]

    let result = '';

    for(let i=0; i < strArr.length; i++){
        result += ' '+strArr[i][0].toUpperCase() + strArr[i].substr(1);
    }

    return result;
}

console.log(manipulate(str));