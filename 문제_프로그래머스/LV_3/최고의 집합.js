/**
 *각 원소의 합이 S가 되는 수의 집합
 * 위 조건을 만족하면서 각 원소의 곱 이 최대가 되는 집합
 * @param {number} n
 * @param {number} s
 * @returns
 */
function solution(n, s) {
  const answer = [];
  let max = -1;
  for (let i = n; i > 0; i--) {
    max = parseInt(s / i);
    if (max === 0) {
      return [-1];
    }
    s = s - max;
    answer.push(max);
  }
  return answer;
}
console.log(solution(2, 9));
console.log(solution(2, 1));
console.log(solution(2, 8));
console.log(solution(3, 8));
console.log(solution(3, 9));
