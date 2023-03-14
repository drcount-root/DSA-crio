/*

You are given a list of words present in a book. Your younger brother is really curious to know the K most frequent words in the book, you have to find them.


Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order should come first.

Input format
There are three lines of input

The first line contains N, which is the number of input strings.

The second line contains N space separated input strings (S).

The third line contains the value of K.

Output format
Print the K most frequent words present inside the book, each in a new line. If two words have the same frequency, then the word with the lower alphabetical order should come first.

Constraints
1 <= N <= 1000

1 <= Length(S) <= 100000

'a' <= S[i] <= 'z'

1 <= K <= Number of Unique Strings

Sample Input 1
1

bus

1

Sample Output 1
bus

Explanation 1
In the given input, the frequency of "bus" is 1 and it is the 1st most frequent word.

Sample Input 2
3

car bus car

2

Sample Output 2
car

bus

Explanation 2
In the given input, the frequency of "car" is 2, frequency of “bus” is 1.

Since K = 2, both words are printed, with "car" being the most frequent, gets printed first.

*/

function frequentWords(words, k) {
    const hashM = new Map();

    for(let i = 0 ; i < words.length; i++){
        const word = words[i];

        if(!hashM.has(word)){
            hashM.set(word, 1);
        }
        else{
            hashM.set(word, hashM.get(word) + 1);
        }
    }

    const arr = [...hashM.entries()].sort((a, b) => b[1] !== a[1] ? b[1] - a[1] : a[0].localeCompare(b[0]));

    return arr.slice(0, k).map(item => item[0]);
}