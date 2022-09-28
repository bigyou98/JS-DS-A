function solution(n) {
  const d = Array(30001).fill(0);

  for (let i = 2; i <= x; i++) {
    d[i] = d[i - 1] + 1;
    if (i % 2 === 0) {
      d[i] = Math.min(d[i], d[i / 2] + 1);
    }
    if (i % 3 === 0) {
      d[i] = Math.min(d[i], d[i / 2] + 1);
    }
    if (i % 5 === 0) {
      d[i] = Math.min(d[i], d[i / 2] + 1);
    }
  }

  return d[n];
}

console.log(solution());
