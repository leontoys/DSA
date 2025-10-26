// Iterative JavaScript program to reverse a linked list

class Node {
  constructor(newData) {
    this.data = newData;
    this.next = null;
  }
}

// Given the head of a list, reverse the list and return the
// head of reversed list
function reverseList(head) {
  // Initialize three pointers: curr, prev and next
  let curr = head;
  let prev = null;
  let next;

  // Traverse all the nodes of Linked List
  while (curr !== null) {
    // Store next
    next = curr.next;

    // Reverse current node's next pointer
    curr.next = prev;

    // Move pointers one position ahead
    prev = curr;
    curr = next;
  }

  // Return the head of reversed linked list
  return prev;
}

function printList(node) {
  while (node !== null) {
    console.log(" " + node.data);
    node = node.next;
  }
  console.log();
}

// Driver Code
// Create a hard-coded linked list:
// 1 -> 2 -> 3 -> 4 -> 5
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Given Linked list:");
printList(head);

head = reverseList(head);

console.log("Reversed Linked List:");
printList(head);
