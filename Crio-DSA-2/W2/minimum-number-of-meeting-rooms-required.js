/*

Given a list of meeting time intervals, you have to find the minimum number of rooms required to organize all the meetings.

Input format
First line contains an integer N, indicating the number of meetings.

Next N lines contain two space separated integers S and E, indicating the Starting and Ending time of a meeting, respectively.

Output format
Print the minimum number of rooms required.

Constraints
N <= 100000

0 <= S,E <= 1000000000 (10^9)

Si < Ei

Sample Input 1
3

0 20

5 10

10 15

Sample Output 1
2

Explanation 1
One room can host the 1st meeting (0-20) and the other room can host both the 2nd meeting (5-10) and 3rd meeting (10-15), one after the other.

So, only 2 rooms are required if total for the 3 meetings.

*/

function minMeetingRooms(intervals) {
  if(intervals.length <= 1) return intervals.length;

  const startTime = [];
  const endTime = [];

  intervals.forEach(x => {
    startTime.push(x[0]);
    endTime.push(x[1]);
  });

  startTime.sort((a, b) => a - b );
  endTime.sort((a, b) => a - b);

  let startPoint = 0;
  let endPoint = 0;
  let rooms = 0;

  while(startPoint < intervals.length){
    if(startTime[startPoint++] >= endTime[endPoint]){
        ++endPoint;
    }
    else{
        ++rooms;
    }
  }

  return rooms;
}

console.log(
  minMeetingRooms([
    [0, 20],
    [5, 10],
    [10, 15],
  ])
);
