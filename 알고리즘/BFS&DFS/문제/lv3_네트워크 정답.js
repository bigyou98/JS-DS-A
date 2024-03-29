function solution(n, computers = []) {
  let answer = 0;
  const visited = [];

  for (let i = 0; i < n; i++) {
    visited.push(false);
  }

  const dfs = (index) => {
    // 다녀갔다는 표시
    visited[index] = true;

    for (let i = 0; i < n; i++) {
      // 1인데 방문하지 않은 곳이면 true로 바꿔준다
      if (computers[index][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  };

  // 방문하지 않았다면 재귀함수 호출하고 1증가시키기
  for (let i = 0; i < n; i++) {
    // 해당하는 것부터 연결이되는 곳을 순회한다.
    if (!visited[i]) {
      {
        dfs(i);
        answer += 1;
      }
    }
  }
  return answer;
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
