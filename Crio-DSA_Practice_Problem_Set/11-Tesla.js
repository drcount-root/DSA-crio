/*
Problem Description
Tesla is testing their new car which they will be launching soon. The driver of the car started recording the speed of the car. Let’s assume he always starts with a speed of 1500. Whenever his speed changed, he recorded this change in an array. This array is given to you as input. You have to return a result array with two numbers - the highest speed he ever reached and his final speed.


Input format
First line contains an integer n.

Second line contains n space separated integers.


Output format
Return an array with 2 integers


Sample Input 1
5

100 -200 350 100 -600


Sample Output 1
1850 1250


Explanation
Initial speed is always 1500.

1500+100=1600

1600-200=1400

1400+350=1750

1750+100=1850

1850-600=1250

Among these speeds, his highest speed is 1850 and the final speed is 1250.


Constraints
1<=n<=100000

-1000<=diffs[i]<=1000
*/

function tesla(diffs, n) {
  const initial_speed = 1500;
  const changedSpeedArr = [];

  changedSpeedArr.push(initial_speed + diffs[0]);
  for (let i = 1; i < n; i++) {
    changedSpeedArr.push(changedSpeedArr[i - 1] + diffs[i]);
  }
  return [Math.max(...changedSpeedArr), changedSpeedArr[n - 1]];
}

console.log(tesla([100, -200, 350, 100, -600], 5));
