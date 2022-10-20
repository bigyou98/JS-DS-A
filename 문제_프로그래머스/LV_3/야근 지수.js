/**
 * 야근 피로도는 = 야근을 시작한 시점 + 남은 일의 작업량**2
 * @param {number[]} n
 * 퇴근까지 남은 시간
 * @param {number} works
 * 작업량
 * @returns 야근 피로도를 최소화한 값
 */

function solution(n, works) {
  class MaxHeap {
    constructor() {
      this.heap = [0];
    }

    push(value) {
      this.heap.push(value);
      let currentIndex = this.heap.length - 1;
      let parentIndex = Math.floor(currentIndex / 2);

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
      if (this.heap.length === 2) return this.heap.pop();

      const returnValue = this.heap[1];

      this.heap[1] = this.heap.pop();

      let currentIndex = 1;
      let leftIndex = 2;
      let rightIndex = 3;

      while (
        this.heap[currentIndex] < this.heap[leftIndex] ||
        this.heap[currentIndex] < this.heap[rightIndex]
      ) {
        if (this.heap[currentIndex] < this.heap[rightIndex]) {
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
        leftIndex = currentIndex * 2;
        rightIndex = currentIndex * 2 + 1;
      }
      return returnValue;
    }
  }
  const answer = new MaxHeap();

  works.forEach((work) => {
    answer.push(work);
  });

  for (let i = 0; i < n; i++) {
    let max = answer.pop();
    if (max <= 0) {
      return 0;
    }
    answer.push(max - 1);
  }

  return answer.heap.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
}

// console.log(solution(4, [4, 3, 3]));
// console.log(solution(1, [2, 1, 2]));
// console.log(solution(3, [1, 1]));
// console.log(solution(99, [2, 15, 22, 55, 55])); // 580
// console.log(solution(9, [1, 2, 11])); // 580

// 테스트 3 실패 , 효율성 1,2 실패
//  (143.36ms, 38.1MB)
//  (154.74ms, 38.1MB)

// 다른 사람 코드
function solution2(n, works) {
  const sortedWorks = [...works].sort((a, b) => b - a);
  let max = sortedWorks[0];

  while (n > 0) {
    for (let i = 0; i < sortedWorks.length; i++) {
      if (max === sortedWorks[i]) {
        console.log("전", sortedWorks[i]);

        sortedWorks[i] -= sortedWorks[i] > 0 ? 1 : 0;
        console.log("후", sortedWorks[i]);

        n--;
      }
      if (!n) break;
    }

    max--;
    if (!max) break;
  }

  return sortedWorks.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
}

console.log(solution2(4, [4, 3, 3]));
// console.log(solution(1, [2, 1, 2]));
