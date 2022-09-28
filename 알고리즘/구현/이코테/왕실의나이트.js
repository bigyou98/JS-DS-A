function solution(n) {
  const [strX, strY] = n.split("");
  let x = strX.charCodeAt() - "a".charCodeAt() + 1;
  let y = Number(strY);

  let count = 0;
  const step = [
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
  ];

  for (const dd of step) {
    const [dx, dy] = dd;
    if (x + dx >= 1 && x + dx <= 8 && y + dy >= 1 && y + dy <= 8) {
      count++;
    }
  }
  return count;
}

console.log(solution("c2"));
