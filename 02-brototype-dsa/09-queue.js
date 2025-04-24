class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  display() {
    let currentNode = this.front;
    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
  enqueue(data) {
    let newNode = new Node(data);
    if (this.rear === null) {
      this.front = this.rear = newNode;
      return;
    }
    this.rear.next = newNode;
    this.rear = newNode;
  }
  dequeue() {
    if (this.front === null) {
      console.log("queue is empty");
      return;
    }
    this.front = this.front.next;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.display();
queue.dequeue();
queue.display();
queue.dequeue();
queue.display();
queue.dequeue();
queue.display();
queue.dequeue();
queue.display();
