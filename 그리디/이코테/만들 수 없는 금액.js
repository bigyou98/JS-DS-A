// 동전을 이용해 만들 수 없는 금액중 최솟값을 구하는 프로그램
function solution(arr = []) {
  arr.sort((a, b) => {
    return a - b;
  });

  // 1부터 확인하기 target을 지정
  let target = 1;

  // 배열을 순회하면서
  // 해당 item이 target보다 작거나 같으면 target에 item을 더한다
  for (const item of arr) {
    // 찾음
    if (target < item) {
      return target;
    }
    // target-1까지는 만들수 있다는 소리
    target += item;
  }
}

console.log(solution([3, 2, 1, 1, 9])); // 8
