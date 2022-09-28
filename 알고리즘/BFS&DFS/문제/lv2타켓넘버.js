function solution(numbers = [], target) {
  let result = 0;

  function dfs(depth, sum) {
    if (depth === numbers.length) {
      if (sum === target) {
        result++;
      }
      return;
    }

    dfs(depth + 1, sum + numbers[depth]);
    dfs(depth + 1, sum - numbers[depth]);
  }

  dfs(0, 0);

  return result;
}

console.log(solution([1, 1, 1, 1, 1], 3)); // 5
console.log(solution([4, 1, 2, 1], 4)); // 2
