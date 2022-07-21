class MaxHeap {
  constructor() {
    this.heap = [null];
    // 0번째 index는 사용하지 않을 것이기 때문
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    // 자신이 루트가 아닌 경우
    // 부모 노드의 값이 현재 값 작은 경우
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
      ];

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }
}

const heap = new MaxHeap();
heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);

console.log(heap.heap); // [ null, 63, 54, 45, 27, 36 ]
