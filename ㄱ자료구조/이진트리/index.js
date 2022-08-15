import { Queue } from "../큐";
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    const queue = new Queue();
    queue.enQueue(this.root);
    while (queue.size) {
      const currentNode = queue.deQueue();
      if (currentNode.left) queue.enQueue(currentNode.left);
      if (currentNode.right) queue.enQueue(currentNode.right);
    }
  }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.left.right.right = new Node(4);
