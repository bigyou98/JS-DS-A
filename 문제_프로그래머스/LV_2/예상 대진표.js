/**
 *
 * @param {number} n
 * 참가자수
 * @param {number} a
 * a참가자번호
 * @param {number} b
 * b참가자번호
 */
function solution(n, a, b) {
  let count = 0;
  while (a !== b) {
    count++;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }
  return count;
}

console.log(solution(8, 4, 7));
