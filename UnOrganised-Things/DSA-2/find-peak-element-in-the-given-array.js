function peakElement(N,nums) {

    let low = 0;
    let high = N - 1;
    let mid;

    while(low <= high){
        mid = parseInt((low + high) / 2);

        if((mid == 0 || nums[mid - 1] <= nums[mid]) && (mid == N - 1 || nums[mid + 1] <= nums[mid])) break;

        if(mid > 0 && nums[mid - 1] > nums[mid]) high = mid - 1;

        else low = mid + 1;
    }

    return mid;
}