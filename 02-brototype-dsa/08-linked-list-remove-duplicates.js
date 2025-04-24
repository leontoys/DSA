class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  add(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  removeDuplicates() {
    if (this.head === null) {
      return;
    }
    let currentNode = this.head.next;
    let previous = this.head;
    while (currentNode !== null) {
      if (currentNode.data === previous.data) {
        previous.next = currentNode.next;
      } else {
        previous = currentNode;
      }
      currentNode = currentNode.next;
    }
  }
}

const list = new LinkedList();
list.add(6);
list.add(10);
list.add(5);
list.add(5);
list.add(5);
list.add(8);
list.add(8);
list.print();
list.removeDuplicates();
list.print();
