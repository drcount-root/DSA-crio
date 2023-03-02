function sortArrayAbsolute(n, nums) {
    const newArr = new Array(n);

    for(let i = 0; i < n ; i++){
        newArr[i] = nums[i];
    }

    newArr.sort((a, b) => {
        if(Math.abs(a) < Math.abs(b)) return -1;
        else if(Math.abs(a) > Math.abs(b)) return 1;
        else if(a < b) return -1;
        else if(a > b) return 1;
        else return 0;
    })

    for(let j = 0; j < n; j++){
        nums[j] = newArr[j];
    }

    return nums;
}