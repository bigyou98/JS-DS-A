function solution(bridge_length, weight, truck_weights = []) {
  // 다리길이 만큼 만듬
  let currentBridge = [[0, 1]];

  let time = 0;

  // 남은 트럭이 없을때 까지 반복한다.
  while (truck_weights.length > 0) {
    time++;

    // 시간되면 내보내기
    const [_, endTime] = currentBridge[0];
    if (endTime === time) {
      currentBridge.shift();
    }

    // 현재 다리위에있는 총 무게 + 들어올 무게 < 한계
    const totalSum = currentBridge.reduce((sum, cur) => sum + cur[0], 0);
    const [next] = truck_weights;
    // 한계보다 작다면
    if (totalSum + next <= weight) {
      // 배열에 무게와 끝날 시간을 넣어준다.
      currentBridge.push([truck_weights.shift(), time + bridge_length]);
    } else {
      continue;
    }
  }

  return currentBridge[currentBridge.length - 1][1];
}

// console.log(solution(2, 10, [7, 4, 5, 6])); // 8
// console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110
