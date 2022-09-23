// 상하좌우가 모두 0이면 +1
function solution(graph = []) {
  let answer = 0;
  function dfs(x, y) {
    // 상하좌우가 밖으로 나간다면
    if (x < 0 || x >= graph.length || y < 0 || y >= graph[0].length) {
      return false;
    }
    // 아직 방문하지 않았다면
    if (graph[x][y] === 0) {
      graph[x][y] = 1;
      dfs(x - 1, y);
      dfs(x, y - 1);
      dfs(x + 1, y);
      dfs(x, y + 1);
      // 상하좌우가 모두 0인 경우
      return true;
    }
    return false;
  }

  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[0].length; j++) {
      // 1번 할때마다 아직 갈수있는 모든 지역들을 간 후 1로 바꿔버리기에 한구역을 먹는다.
      // 시작점에서 처음 방문할 때만 
      if (dfs(i, j) === true) {
        answer += 1;
      }
    }
  }
  return answer;
}

// 그래프라고 상상하고 해라
//
console.log(
  solution([
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
  ])
); // 3
