/*

Given a sorted array of integers and a target, find if there’s a pair of elements that add up to the target. Return true if such a pair can be found, and false otherwise.

Input format
There are 3 lines of input.

First line contains an Integer N that represents the number of elements in the array.

Second line contains N space separated integers, which are members of the array.

Third line contains an integer X, which is the target value.

Output format
Print "Present" if there is such a pair present in the array otherwise print "Not Present".

Constraints
2 <= Length of array <= 10^5

1 <= Range of values <= 10^6

Sample Input 1
5 --> Number of elements in array

2 4 5 8 9 --> Array elements

7 --> Target sum value

Sample Output 1
Present

Explanation 1
Since 0 and 2 are the indices where the numbers 2 and 5 which add up to 7 are seen

*/

function twoSumInSortedArray(n, arr, target_sum) {

    let l = 0;
    let r = n - 1;

    while(l < r){
        let sum = arr[l] + arr[r];

        if(sum === target_sum) return true;

        else if(sum < target_sum) l++;

        else r--;
    }

    return false;
}

console.log(twoSumInSortedArray(5, [2, 4, 5, 8, 9], 7));

// TC => O(n)
// SC => O(1)


/*
    If asked to find the numbers
*/

function twoSumInSortedArrayNumsPair(n, arr, target_sum) {

    let l = 0;
    let r = n - 1;

    while(l < r){
        let sum = arr[l] + arr[r];

        if(sum === target_sum) return [arr[l], arr[r]];

        else if(sum < target_sum) l++;

        else r--;
    }

    return 'Not Present';
}

console.log(twoSumInSortedArrayNumsPair(5, [2, 4, 5, 8, 9], 7));

console.log(twoSumInSortedArrayNumsPair(5, [3, 4, 5, 8, 9], 7));