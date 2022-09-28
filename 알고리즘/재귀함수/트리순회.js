class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  // 전위 순회
  preOrder(currentNode) {
    console.log(currentNode.value);
    if (currentNode.left) this.preOrder(currentNode.left);
    if (currentNode.right) this.preOrder(currentNode.right);
  }

  // 중위 순회
  inOrder(currentNode) {
    if (currentNode.left) this.inOrder(currentNode.left);
    console.log(currentNode.value);
    if (currentNode.right) this.inOrder(currentNode.right);
  }

  // 후위 순회
  postOrder(currentNode) {
    if (currentNode.left) this.postOrder(currentNode.left);
    if (currentNode.right) this.postOrder(currentNode.right);
    console.log(currentNode.value);
  }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);

tree.preOrder(tree.root);
tree.inOrder(tree.root);
tree.postOrder(tree.root);
