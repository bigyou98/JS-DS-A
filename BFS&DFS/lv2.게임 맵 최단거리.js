function solution(maps) {
  let answer = 1;
  let queue = [];

  // 상하 좌우 이동하기 위함
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const n = maps.length;
  const m = maps[0].length;

  queue.push([0, 0]);
  maps[0][0] = 0;

  while (queue.length > 0) {
    // 큐의 길이만큼 반복함
    for (let _ = 0; _ < queue.length; _++) {
      let [x, y] = queue.shift();

      for (let j = 0; j < 4; j++) {
        // 상하좌우 이동하기
        let nx = x + dx[j];
        let ny = y + dy[j];

        // 배열의 범위 안이어야 하고 이동한 곳이 1일때
        if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
          // 최종 지역일 때
          if (nx == n - 1 && ny == m - 1) {
            // 카운트 반환함
            return ++answer;
          }
          // 그게 아니라면 이동한 곳을 push한다.
          queue.push([nx, ny]);
          // 이동한 곳은 0으로 만든다.
          maps[nx][ny] = 0;
        }
      }
    }
    answer++;
  }

  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
); // 11
