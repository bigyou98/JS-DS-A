class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }
  enQueue(value) {
    this.queue[this.rear++] = value;
  }
  deQueue() {
    const value = ths.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  isEmpty() {
    return this.rear === this.front;
  }
}
function solution(n, edge) {
  // 편의상 0은 버림
  const graph = Array.from(Array(n + 1), () => []);

  // 그래프  생성하기
  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  // 거리 기록하는 배열 생성
  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  // BFS 로직
  const queue = new Queue();
  queue.enQueue(1);

  while (queue.isEmpty()) {
    const src = queue.deQueue();

    // 노드를 순회한다.
    for (dest of graph[src]) {
      // 한번도 가지 않은 곳
      if (distance[dest] === 0) {
        queue.enQueue(dest);

        // 도착지 = 출발지 + 1;
        distance[dest] = distance[src] + 1;
      }
    }
  }
  const max = Math.max(...distance);
  return distance.filter((item) => item === max).length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
); //3
