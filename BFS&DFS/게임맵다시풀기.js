function solution(maps) {
  // 초기 작업
  let count = 1;
  maps[0][0] = 0;
  const queue = [[0, 0]];

  const n = maps.length;
  const m = maps[0].length;
  // const trans = [
  //   [1, 0],
  //   [-1, 0],
  //   [0, 1],
  //   [0, -1],
  // ];
  const xx = [-1, 1, 0, 0];
  const yy = [0, 0, -1, 1];

  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      let [x, y] = queue.shift();
      // 이동하기
      for (let j = 0; j < 4; j++) {
        // let dx = x + trans[j][0];
        // let dy = y + trans[j][1];
        let dx = x + xx[j];
        let dy = y + yy[j];

        if (dx >= 0 && dx < n && dy >= 0 && dy < m && maps[dx][dy] === 1) {
          if (dx == n - 1 && dy == m - 1) {
            return ++count;
          }
          queue.push([dx, dy]);
          maps[dx][dy] = 0;
        }
      }
    }
    count++;
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
