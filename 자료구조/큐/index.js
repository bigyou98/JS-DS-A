class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enQueue(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.tail = this.head = newNode;
    }
    this.tail = newNode;
    this.tail.next = newNode;
  }

  deQueue() {
    const value = this.head.value;
    this.head = this.head.next;

    return value;
  }

  // 현재 head의 값
  peek() {
    return this.head.value;
  }
  size(){
    
  }
}
