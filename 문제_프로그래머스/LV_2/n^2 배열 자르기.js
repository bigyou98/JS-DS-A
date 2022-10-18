/**
 *
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @returns
 */
function solution(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    let rest = i % n;
    let share = parseInt(i / n);
    answer.push(Math.max(rest, share) + 1);
  }

  return answer;
}
console.log(solution(3, 2, 5)); // [3,2,2,3]
console.log(solution(4, 7, 14)); // [3,2,2,3]
