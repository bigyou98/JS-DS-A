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

  isEmpty() {
    return this.front == null && this.rear === null;
  }
  enQueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) this.front = newNode;
    else this.rear.next = newNode;

    this.rear = newNode;
  }

  deQueue() {
    if (this.isEmpty()) return;
    const value = this.front.data;
    this.front = this.front.next;
    if (!this.front) this.rear = null;

    return value;
  }

  peekFront() {
    if (this.isEmpty()) return -404;
    return this.front.data;
  }

  display() {
    if (this.isEmpty()) return;
    let curr = this.front;
    process.stdout.write("(FRONT) ");
    while (curr != this.rear) {
      process.stdout.write(`${curr.data} ---> `);
      curr = curr.next;
    }
    process.stdout.write(`${this.rear.data} (REAR)\n`);
  }
}

function bfs(graph, start, visited) {
  const queue = new Queue();
  queue.enQueue(start);
  visited[start] = true;

  while (!queue.isEmpty()) {
    let value = queue.deQueue();
    console.log(value);
    for (const i of graph[value]) {
      if (!visited[i]) {
        queue.enQueue(i);
        visited[i] = true;
      }
    }
  }
}

// 1번부터 시작하는 경우가 많아서 0번은 비워둠
let graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

// 8개의 노드를 방문하지만 0번은 사용하지 않을거라서 저장공간은 1 더크게 만든다.
// 즉 노드의 개수 + 1
const visited = Array(9).fill(false);

bfs(graph, 1, visited);
