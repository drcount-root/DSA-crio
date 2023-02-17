function largestSubarrayWithSumZero(n, arr) {
  const sumMap = new Map(); // create an empty map to store prefix sums and their indices
  let sum = 0; // initialize the prefix sum to 0
  let maxLength = 0; // initialize the maximum length of a subarray with sum 0 to 0
  let maxStartIndex = -1; // initialize the starting index of the subarray to -1

  sumMap.set(0, -1); // set the initial sum of 0 at index -1

  for (let i = 0; i < n; i++) {
    sum += arr[i]; // add the current element to the prefix sum

    if (sumMap.has(sum)) {
      // check if the current sum has been seen before
      const startIndex = sumMap.get(sum) + 1; // get the starting index of the subarray with sum 0

      if (i - startIndex > maxLength) {
        // check if the current subarray is longer than the previous one
        maxLength = i - startIndex;
        maxStartIndex = startIndex;
      }
    } else {
      sumMap.set(sum, i); // store the current sum and its index in the map
    }
  }

  if (maxStartIndex === -1) {
    // check if no subarray with sum 0 was found

    return -1;
  }

  const answer = [];

  for (let i = maxStartIndex; i <= maxStartIndex + maxLength; i++) {
    // print the elements of the subarray
    // console.log(`${arr[i]} `);
    answer.push(arr[i]);
  }
  //   console.log();
  return answer;
}

console.log(largestSubarrayWithSumZero(6, [2, 3, 1, -4, 0, 6]));
