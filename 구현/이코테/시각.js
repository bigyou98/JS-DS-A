function solution(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < 60; j++) {
      for (let k = 0; k < 60; k++) {
        if (
          String(i).includes("3") ||
          String(j).includes("3") ||
          String(k).includes("3")
        ) {
          count++;
        }
      }
    }
  }
  return count;
}

console.log(solution(5));
