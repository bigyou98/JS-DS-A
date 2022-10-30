/**
 * 입력값: 1,000,000 : nlogn이내로
 * @param {number[]} topping
 * 토핑의 번호
 * @returns {number}
 */
function solution(topping) {
  let answer = 0;
  for (let i = 1; i < topping.length; i++) {
    let younger = new Set(topping.slice(0, i)).size;
    let bigger = new Set(topping.slice(i)).size;
    if (younger === bigger) {
      answer++;
    }
  }
  return answer;
}
console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])); //2
// console.log(solution([1, 2, 3, 1, 4])); //0
