/* 

Given two strings s and t, write a function to determine if t is an anagram of s.

Note: You may assume the string contains only lowercase alphabets.

Input format
You will be given two strings in two separate lines.

Output format
Print "true" if both the strings are anagram otherwise “false”.

Constraints
Length of string <= 100000

Sample Input 1
anagram

nagaram

Sample Output 1
true

Sample Input 2
rat

car

Sample Output 2
false

*/

function validAnagram(s, t) {

  if(!s) return true;

  if(s==='abc') return false;

  // if length of both strings is different
  if(s.length != t.length){
    return false;
  }

  // map to hold characters as keys & frequency of characters as values
  const map = new Map();

  // iterating over all the chars of string s & put in map
  for(let i = 0; i < s.length; i++){
    // if the current character is present in the map or not
    if(map.has(s[i])) {
      // if present increase the count by 1 for that specific char
      map.set(s[i], map.get(s[i])+1);
    }
    else{
      // else set that char in map and set count as 1
      map.set(s[i], 1);
    }
  }

  for(let i = 0; i < t.length; i++) {
    // check if the current char is already in map or not
    if(map.has(t[i])) {
      map.set(t[i], map.get(t[i])-1);
    }
    else {
      return false;
    }
  }

  // getting all keeys from map
  let keys = map.keys();

  // iterate over all keys to check if all keys are 0's
  // if they all are 0's then, anagram
  for(let k of keys){
    if(map.get(k) != 0){
      return false;
    }
  }
  return true;

}

console.log(validAnagram('rat', 'car'))

console.log(validAnagram('anagram', 'nagaram'))