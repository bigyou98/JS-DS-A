function solution(n, m, k, x, arr = []) {
  // 배열만큼 만들기
  const checkBox = Array(n + 1).fill(999999);
  checkBox[x] = 0;
  const queue = [];
  const map = {};

  // 전체를 돌면서 0번째가 x인거 찾아서 넣기
  arr.forEach(([x, y]) => {
    if (map[x]) {
      map[x].push(y);
    } else {
      map[x] = [y];
    }
  });
  map[x].forEach((city) => {
    queue.push([x, city]);
  });

  // 큐 빌 때 까지 while문 시작
  while (queue.length !== 0) {
    const [curX, curY] = queue.shift();
    checkBox[curY] = Math.min(checkBox[curY], checkBox[curX] + 1);

    if (!map[curY]) {
      continue;
    } else {
      map[curY].forEach((city) => {
        queue.push([curY, city]);
      });
    }
  }
  const answer = [];
  checkBox.forEach((v, i) => {
    if (v === k) {
      answer.push(i);
    }
  });

  return answer.length === 0 ? -1 : answer.sort((a, b) => a - b).join(" ");
}

console.log(
  "정답은",
  solution(4, 4, 2, 1, [
    [1, 2],
    [1, 3],
    [2, 3],
    [2, 4],
  ])
);
console.log(
  solution(4, 3, 2, 1, [
    [1, 2],
    [1, 3],
    [1, 4],
  ])
); // -1
console.log(
  "정답은",
  solution(4, 4, 1, 1, [
    [1, 2],
    [1, 3],
    [2, 3],
    [2, 4],
  ])
); // 2 3
