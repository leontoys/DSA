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
    }
  }

  add(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    if (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
}

const list = new LinkedList();
list.add(6);
list.add(10);
list.print();
