function solution(x, y, direction, array) {
  // 북동 남서
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  // 북 - 서 - 남 - 동 순서

  const d = Array.from(Array(array.length), () =>
    new Array(array[0].length).fill(0)
  );

  d[x][y] = 1;
  // 방문한 칸의 수

  const turnLeft = () => {
    direction -= 1;
    if (direction === -1) {
      direction = 3;
    }
  };
  // 현재위치에서 현재 방향 기준으로 반시계방향으로 90도 회전부터 갈곳을 정한다.
  // 바다로는 갈수 없다 : 1
  // 육지 : 0

  let count = 1;
  let turn_time = 0;
  let nx = 0;
  let ny = 0;
  // 이미 가본 곳이라면 바라보는 방향을 유지하고 한칸 뒤로간다.
  while (true) {
    turnLeft();
    nx = x + dx[direction];
    ny = y + dy[direction];
    // 육지라면
    if (d[nx][ny] === 0 && array[nx][ny] === 0) {
      d[nx][ny] = 1;
      turn_time = 0;
      count++;
      x = nx;
      y = ny;
      turn_time = 0;
      continue;
      // 가봤다는 표시
      // map[userX - dx[direction]][userY - dy[direction]] = 1;
    } else {
      turn_time++;
    }
    // 가본 곳이거나 바다라면
    if (turn_time === 4) {
      // 바다가 아니라면 뒤로가기
      nx = x - dx[direction];
      ny = y - dy[direction];
      if (array[nx][ny] === 0) {
        x = nx;
        y = ny;
      } else {
        break;
      }
      turn_time = 0;
    }
  }

  return count;
}

console.log(
  solution(1, 1, 0, [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1],
  ])
);
