function countSort(n, str) {
    let ans='';
    let MAX = 26;
    let letters = new Array(MAX);
    for(let i = 0; i < MAX; i++){
        letters[i] = 0;
    }

    for(let x =0; x < n; x++){
        letters[str[x].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for(let i = 0; i < MAX; i++){
        for(let j = 0; j < letters[i]; j++){
            ans += String.fromCharCode(i + 'a'.charCodeAt(0));
        }
    }

    return ans;
}