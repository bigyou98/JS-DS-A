const 피보나치수열 = (n) => {
  const arr = [];
  arr.push(0, 1, 2);
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};

// 원하는 번째 숫자
