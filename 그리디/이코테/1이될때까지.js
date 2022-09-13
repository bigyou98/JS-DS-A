function solution(n, k) {
  let count = 0;

  while (true) {
    if (n === 1) {
      return count;
    }
    count++;

    if (n % k === 0) {
      n /= k;
    } else {
      n--;
    }
  }
}

console.log(solution(25, 3));
