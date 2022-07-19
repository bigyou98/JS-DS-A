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
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
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
}

function solution(priorities = [], location) {
  const queue = new Queue();

  priorities.forEach((v, i) => {
    queue.enQueue([v, i]);
  });

  // 내림차순
  // 맨 처음부터 가장 큰 값으로 해서 하나씩 처리할 것이기 때문
  priorities.sort((a, b) => b - a);

  // 출력 수
  let count = 0;
  while (true) {
    const currentValue = queue.peek();

    // 본인보다 크다면 맨뒤로 보내는 것
    if (currentValue[0] < priorities[count]) {
      queue.enQueue(queue.deQueue());
    }
    // 본인과 같거나 작은 경우
    else {
      const value = queue.deQueue();
      count += 1;
      if (location === value[1]) {
        return count;
      }
    }
  }
}

// console.log(solution([2, 1, 3, 2], 2)); // 1
// // console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
