function solution(n, edge = []) {
  // 그래프 생성하기
  const dfs = {};
  for (const [x, y] of edge) {
    if (!result[y]) {
      result[y] = [];
    }
    if (!result[x]) {
      result[x] = [];
    }
    result[x].push(y);
    result[y].push(x);
  }
  // stack으로 구현
  const result = [];
  const countArr = [];
  for (const key in dfs) {
    const element = dfs[key];
    let count = 0;
    for (const i of element) {
      result.push(i)
      count++;
    }
    countArr.count;
  }

  return Math.max(...countArr);
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
); //3
