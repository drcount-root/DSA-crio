function moveZeroes(nums) {
    let count = 0;
    for(let i = 0; i< nums.length; i++){
        if(nums[i] != 0){
            nums[count++] = nums[i];
        }
    }
    while(count < nums.length){
        nums[count++] = 0
    }

    return nums;
}