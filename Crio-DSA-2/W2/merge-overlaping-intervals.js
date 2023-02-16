/*

An interval is a range, with a starting value and ending value. [1, 3] indicates elements 1, 2, 3 and so on.

Given a collection of intervals, merge all overlapping intervals. The result should only have mutually exclusive intervals - meaning that no number should be common between two intervals, in the result.

Note: The merged intervals should be printed in increasing order of start value.

Input format
There are N+1 lines of input.

First line contains N, the number of intervals

Next N lines contain 2 space separated integers A and B, which represent the start and end of an interval

Output format
For the X merged intervals, print each interval (the start and end being space separated) on a separate line

Constraints
1 <= N <= 50000

0 <= A, B <= 1e9

B >= A

Sample Input 1
4

1 3

2 6

8 10

15 18

Sample Output 1
1 6

8 10

15 18

Explanation 1
Since intervals [1 3] and [2 6] overlap, merge them into [1 6]

Sample Input 2
2

1 4

4 5

Sample Output 2
1 5

Explanation 2
Intervals [1 4] and [4 5] overlap and get merged into [1 5]

*/

function mergeIntervals(n, intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let ans = [];
  let prev = intervals[0];
  for (let i = 1; i < n; i++) {
    if (intervals[i][0] <= prev[1]) {
      prev = [prev[0], Math.max(prev[1], intervals[i][1])];
    } else {
      ans.push(prev);
      prev = intervals[i];
    }
  }

  ans.push(prev);

  return ans;
}

console.log(
  mergeIntervals(4, [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
