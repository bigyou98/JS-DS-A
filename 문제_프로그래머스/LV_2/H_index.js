// function solution(citations = []) {
//   citations.sort((a, b) => b - a);
//   let i = 0;
//   while (i + 1 <= citations[i]) {
//     i++;
//   }
//   return i;
// }
/**
 *
 * @param {number[]} citations
 *
 * n편 중, h번 이상 인용된 논문이 h편 이상이고
 * 나머지 논문이 h번 이하 인용되었다면
 * h의 최댓값이 이 과학자의 H-Index입니다.
 * @returns
 */
function solution(citations) {
  citations.sort((a, b) => b - a);
  let i = 0;
  while (citations[i] >= i + 1) {
    i++;
  }
  return i;
}

console.log(solution([3, 0, 6, 1, 5])); // 3
console.log(solution([10, 100])); // 2
console.log(solution([6, 6, 6, 6, 6, 6])); // 6
console.log(solution([2, 2, 2])); // 2
console.log(solution([3, 3, 3, 3, 3, 3])); // 3
