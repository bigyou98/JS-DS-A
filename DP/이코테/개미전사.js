function solution(arr = []) {
  const d = Array(100).fill(0);

  d[0] = arr[0];
  d[1] = Math.max(arr[0], arr[1]);

  for (let i = 2; i < array.length; i++) {
    d[i] = Math.max(d[i - 1], d[i - 2] + arr[i]);
  }
  return d[arr.length - 1];
}

console.log(solution());
