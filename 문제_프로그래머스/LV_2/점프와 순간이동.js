// K 칸을 앞으로 점프  :  건전지 사용O
// (현재까지 온 거리) x 2 에 해당하는 위치로 순간이동 :  건전지 사용X -> 효율적임

// N까지 가려고함
// 사용해야하는 건전지 사용량의 최솟값

function solution(n) {
  let answer = 0;

  while (n !== 0) {
    if (n % 2 !== 0) {
      n -= 1;
      answer++;
    } else {
      n /= 2;
    }
  }

  return answer;
}
// console.log(solution(5)); // 2
// console.log(solution(6)); // 2
// console.log(solution(500)); // 5
