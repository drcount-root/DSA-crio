/*

You are given to implement a stack which performs pushing, popping, and has a function findMin() which returns the minimum element present in the stack.

Push, pop and min should all operate in 0(1) time.


You will be given 3 types of queries. For each query you will be asked to perform suitable operations:

For query of type 1 x : push an element 'x' into the stack.

For query of type 2 : pop the last inserted element from the stack .

For query of type 3 : Find the minimum element from the stack. If the stack is empty, print -1.

Input format
First line contains an integer N denoting the number of queries.

For each query of type 1 there will be two integers 1 and x and for type 2 and 3 only single integers 2 or 3.

Output format
For each query of type 3. Print the minimum element in a new line.

Sample Input 1
6

1 2

1 3

1 1

3

2

3

Sample Output 1
1

2

Explanation 1
When we get to the query of type 3, the stack contains values 2, 3 and 1 (which were inserted with three queries of type 1 at the beginning) so the min element is 1. For the next query of type 3, the previous min element with value 1 has been popped (with the query type 2), so the remaining min element is 2.

Constraints
1 <= N <= 10^5

0 <= A[i] <= 10^8 , 0<= i< N

*/

const stack = [];
const minStack = [];

function push(x) {
  stack.push(x);
  if (!minStack.length || x <= minStack[minStack.length - 1]) minStack.push(x);
}

function pop() {
  if (stack.length) {
    const popped = stack.pop();
    if (popped === minStack[minStack.length - 1]) minStack.pop();
  }
}

function findMin() {
  return minStack.length ? minStack[minStack.length - 1] : -1;
}
