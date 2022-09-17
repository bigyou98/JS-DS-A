// 괴물이 있는곳 0
// 괴물이 없는곳 1

// 탈출구는 끝에 위치함
// 탈출하기 위해 움직여야하는 최소 칸의 개수

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
}

function solution(x, y, arr) {
  const queue = new Queue();
  queue.enQueue([x, y]);

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  while (!queue.isEmpty()) {
    let [x, y] = queue.deQueue();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx >= arr.length || ny < 0 || ny >= arr[0].length) {
        continue;
      }

      if (arr[nx][ny] === 1) {
        arr[nx][ny] = arr[x][y] + 1;
        queue.enQueue([nx, ny]);
      }
    }
  }
  return arr[arr.length - 1][arr[0].length - 1];
}

console.log(
  solution(0, 0, [
    [1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
);
