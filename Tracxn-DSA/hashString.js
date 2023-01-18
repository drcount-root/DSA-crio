// you are given a string and a number(sub-string length). 
// The string consists of *, -, and + characters and the string's 
// length will be multiple of the given number. Write a function 
// to hash the string using the below hashing algorithm: - Split 
// the given string into multiple sub-strings of a given length 
// starting from left, - calculate the weight of each sub-string. 
// The number of times a unique sub-string value appears after 
// splitting is defined as the weight of the sub-string, - Sort the 
// unique sub-string values by weight in descending order. If 2 or more 
// sub-strings have the same weight, then sort them by character 
// order: * > - > +, Create the hash by concatenating the sorted list of 
// unique sub-strings and return the hash. 
// Example1: Input: -+*++-*++- sub-string length 2, output: *++--+


function hashString(string, subStringLength) {
    // Split the string into sub-strings
    let subStrings = [];
    for (let i = 0; i < string.length; i += subStringLength) {
        subStrings.push(string.substr(i, subStringLength));
    }

    // calculate the weight of each sub-string and sort the unique sub-strings by weight and character order
    let subStringWeights = subStrings.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {})
    let sortedSubStrings = Object.keys(subStringWeights).sort(function(a, b) {
        if (subStringWeights[a] === subStringWeights[b]) {
            return a.localeCompare(b);
        }
        return subStringWeights[b] - subStringWeights[a];
    });

    // Create the hash by concatenating the sorted list of unique sub-strings
    let hashString = sortedSubStrings.join('');
    return hashString;
}


console.log(hashString("-+*++-*++-", 2));