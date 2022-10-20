const factorial = (n) => {
  const map = [1, 1];
  for (let i = 2; i <= n; i++) {
    map[i] = map[i - 1] * i;
  }
  return map;
};
