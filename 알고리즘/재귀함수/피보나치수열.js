// 앞의 2개의 항이 뒤 항의 값이 되는 수열

// 원하는 번째 숫자
const 피보나치수열 = (n) => {
  const arr = [];
  arr.push(0, 1, 2);
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n - 1];
};

// 재귀함수로 구현
// 성능 안좋음 위에꺼 쓰셈
function fibonacci(x) {
  if (x <= 2) {
    return 1;
  }
  return fibonacci(x - 1) + fibonacci(x - 2);
}
console.log(fibonacci(10));
console.log(피보나치수열(10));

// 1 1 2 3 5 8 13 21
