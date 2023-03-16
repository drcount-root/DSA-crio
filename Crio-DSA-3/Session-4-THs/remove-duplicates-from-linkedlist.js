/*


Function definition
The function you have to complete accepts the head as an argument. You will make the necessary changes, and return the head.

Sample Input 1
5

1 2 2 3 3

Sample Output 1
1 2 3

Explanation 1
Node 2 and 3 have 2 occurrences each.

Sample Input 2
5

3 1 3 1 4

Sample Output 2
3 1 4

Explanation 1
The first occurrence of nodes 3 and 1 remains in the list and 4 has no duplicates.

Constraints
0 <= Number of nodes <= 105

-109 <= ListNode.val <= 109



*/

function removeDuplicates(head) {
  const seen = new Set();
  let prev = null;
  let curr = head;
  while (curr) {
    if (seen.has(curr.val)) {
      prev.next = curr.next;
    } else {
      seen.add(curr.val);
      prev = curr;
    }
    curr = curr.next;
  }
  return head;
}
