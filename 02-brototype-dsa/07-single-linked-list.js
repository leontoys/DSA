class Node {
  constructor(value) {
    this.data = value;
    this.next = null; //should point to next node
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    //if the list is empty
    if (this.head === null) {
      //then insert this at the beginning
      this.head = newNode;
    } else {
      //get head
      let currentNode = this.head;
      //traverse
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      //now create a new add and add
      currentNode.next = newNode;
    }
  }

  remove(value) {
    //we have to traverse and find the value
    if (this.head === null) {
      console.log("list is empty");
    } else {
      let currentNode = this.head;
      let previous = null;
      while (currentNode !== null) {
        //ie till we reach the end
        if (currentNode.data === value) {
          break;
        }
        previous = currentNode;
        currentNode = currentNode.next;
      }
      //if we found
      if (currentNode) {
        //if it is head
        if (this.head === currentNode) {
          this.head = currentNode.next;
        } else {
          previous.next = currentNode.next;
        }
      }
    }
  }

  print() {
    if (this.head === null) {
      console.log("list is empty");
    } else {
      let currentNode = this.head;
      while (currentNode !== null) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
      }
    }
  }
}

const newList = new LinkedList();
newList.add(5);
newList.add(-1);
newList.add(15);
newList.add(-11);
newList.add(25);
newList.add(-21);
newList.add(35);
newList.add(-31);
//newList.print();
newList.remove(35);
newList.print();
newList.remove(5);
newList.print();
