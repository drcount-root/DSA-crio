function zeroOnes(n, arr) {
    let low = 0;
    let high = n - 1;

    while(low <= high){
        let mid = parseInt((low + high) / 2);
        if(arr[mid] == 1 && (mid == 0 || arr[mid - 1] == 0)) return mid;
        else if(arr[mid] == 1) high = mid - 1;
        else low = mid + 1;
    }

    return -1;
}