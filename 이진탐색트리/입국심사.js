function solution(n, times = []) {
  // 처리할수 있는 가장 빠른시간
  let left = 1;
  // 처리할 수 있는 가장 느린시간
  let right = Math.max(...times) * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // sum([시간/심사시간])
    const sum = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

    if (sum < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
console.log(solution(6, [7, 10])); //	28
