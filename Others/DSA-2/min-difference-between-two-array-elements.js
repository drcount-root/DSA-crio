function minDiff(n, arr) {
    arr.sort((a, b) => a- b);
    let minDiff = arr[1] - arr[0];
    for(let i = 2; i != n; i++){
        minDiff = Math.min(minDiff, arr[i]-arr[i-1]);
    }

    return minDiff;
}