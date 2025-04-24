class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  display() {
    let currentNode = this.top;
    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
  push(data) {
    let newNode = new Node(data);
    if (this.top === null) {
      this.top = newNode;
      return;
    }
    newNode.next = this.top;
    this.top = newNode;
  }
  pop() {
    if (this.top === null) {
      console.log("stack is empty");
      return;
    }
    let currentNode = this.top;
    this.top = currentNode.next;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.display();
stack.pop();
stack.display();
stack.pop();
stack.display();
stack.pop();
stack.display();
stack.pop();
stack.display();
