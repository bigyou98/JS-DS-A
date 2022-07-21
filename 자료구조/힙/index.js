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

  pop() {
    const returnValue = this.heap[1];
    // 배열 메소드를 사용해 맨뒤의 값을 root로 만듬
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    // 자신이 자식 노드보다 작은 경우에 실행
    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        [this.heap[rightIndex], this.heap[currentIndex]] = [
          this.heap[currentIndex],
          this.heap[rightIndex],
        ];
        currentIndex = rightIndex;
      } else {
        [this.heap[leftIndex], this.heap[currentIndex]] = [
          this.heap[currentIndex],
          this.heap[leftIndex],
        ];
        currentIndex = leftIndex;
      }
      // 위치가 변경됬으니 자식 노드들을 변경시켜준다.
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
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
