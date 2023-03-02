function longestSubarrayHavingSumK(N,K,nums) {
    let maxLength = 0;
    for(let i =0; i < N; i++){
        let sum = 0;
        for(let j = i; j < N; j++){
            sum += nums[j]
            if(sum === K){
                maxLength = Math.max(maxLength, (j-i+1))
            }
        }

    }
    return maxLength;
}