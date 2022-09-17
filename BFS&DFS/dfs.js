function dfs(graph, v, visited) {
  visited[v] = true;
  console.log(v);
  for (const i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}

// 각 노드가 연결된 정보를 배열로 표현
// 1번부터 시작하는 경우가 많아서 0번은 비워둠
let graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

// 각 노드가 방문된 정보를 배열로 표현
// 8개의 노드를 방문하지만 0번은 사용하지 않을거라서 저장공간은 1 더크게 만든다.
const visited = Array(9).fill(false);

dfs(graph, 1, visited);
