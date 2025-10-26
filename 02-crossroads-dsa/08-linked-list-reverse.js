class NodeList {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new NodeList(data);
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

  print() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  reverse() {
    //we have to get the last
    let currentNode = this.head;
    let nextNode = currentNode.next;
    let nextToNext = nextNode.next;
    nextNode.next = currentNode;
    currentNode.next = null;
    while (nextToNext !== null) {
      currentNode = nextNode;
      nextNode = nextToNext;
      nextToNext = nextToNext.next;
      nextNode.next = currentNode;
    }
    this.head = nextNode;
  }
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.reverse();
list.print();
