// 효율성에서  통과못함
// 다른 코드들은 제곱근을 사용함
function solution(begin, end) {
  const answer = Array(end + 1).fill(0);

  for (let i = 1; i <= answer.length / 2; i++) {
    for (let j = 2; j < answer.length / i; j++) {
      answer[j * i] = i;
    }
  }
  return answer.slice(begin, end + 1);
}
console.log(solution(1, 10));
//[0, 1, 1, 2, 1, 3, 1, 4, 3, 5]
