/**
 * 설명
 * 1개부터 elements의 개수까지 집합을 만들고 합하고 set에 담아라
 * @param {number[]} elements
 * 원형 수열
 * @returns {number}
 * 원형 수열의 부분 수열 합으로 만들 수 있는 수의 개수
 */
function solution(elements) {
  const length = elements.length;
  const answer = [];
  for (let i = 1; i <= length; i++) {
    for (let j = 0; j < length; j++) {
      let sum = 0;
      for (let k = 0; k < i; k++) {
        let index = j + k >= length ? j + k - length : j + k;
        sum += elements[index];
      }
      answer.push(sum);
    }
  }
  return [...new Set(answer)].length;
}
console.log(solution([7, 9, 1, 1, 4]));
