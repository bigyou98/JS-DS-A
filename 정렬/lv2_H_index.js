function solution(citations = []) {
  citations.sort((a, b) => b - a);
  let i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;
}

console.log(solution([3, 0, 6, 1, 5])); // 3
console.log(solution([10, 100])); // 2
console.log(solution([6, 6, 6, 6, 6, 6])); // 6
console.log(solution([2, 2, 2])); // 2
console.log(solution([3, 3, 3, 3, 3, 3])); // 3
