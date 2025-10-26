class Node {
  constructor(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode; //new node is the next of current
      newNode.previous = currentNode; //current node is previous of new
    }
  }

  remove(value) {
    if (this.head === null) {
      console.log("list is null");
    } else {
      let currentNode = this.head;
      //if we have to remove head
      if (currentNode.data === value) {
        let next = currentNode.next;
        next.previous = null;
        this.head = next;
        return;
      }
      while (currentNode !== null) {
        if (currentNode.data === value) {
          break;
        }
        currentNode = currentNode.next;
      }
      //if found
      if (currentNode) {
        //special case - removing tail
        if (currentNode.next) {
          let previous = currentNode.previous;
          let next = currentNode.next;
          previous.next = next;
          next.previous = previous;
        } else {
          let previous = currentNode.previous;
          previous.next = null;
        }
      }
    }
  }

  print() {
    if (this.head === null) {
      console.log("list is null");
    } else {
      let currentNode = this.head;
      while (currentNode !== null) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
      }
    }
  }
}

const list = new DoubleLinkedList();
list.add(5);
list.add(-1);
list.add(15);
list.add(-11);
list.add(25);
list.add(-21);
list.remove(25);
list.remove(5);
list.remove(-21);
list.print();
