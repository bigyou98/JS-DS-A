// 전부다 연결되면 1로 친다.

// 연결되지 않는 부분을 각각으로 취급한다.

function solution(n, computers = []) {
  let answer = 0; // 네트워크의 개수
  let stack = {};

  for (let i = 0; i < computers.length; i++) {
    for (let j = 0; j < computers[0].length; j++) {
      // 자기자신은 건너뛴다.
      if (i === j) {
        computers[i][j] = 0;
      }
      if (computers[i][j] === 1 && computers[i][j] === 1) {
        computers[i][j] = 0;
        computers[j][i] = 0;
        if (i in stack || j in stack) {
          stack[i] = true;
          stack[j] = true;
        } else {
          answer++;
        }
        // 이미 안에 값이 있다면 추가하지 않기
      }
    }
  }

  return n - answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); // 2
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
); // 1
