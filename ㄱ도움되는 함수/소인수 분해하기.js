function solution(n) {
  let d = 2;
  const factors = [];
  while (d ** 2 <= n) {
    if (n % d === 0) {
      factors.push(d);
      n /= d;
    } else {
      d++;
    }
  }
  if (n > 1) {
    factors.push(n);
  }
  return factors;
}
console.log(solution(12)); // [2,2,3]
