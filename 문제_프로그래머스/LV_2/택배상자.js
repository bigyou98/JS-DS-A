/**
 * 1,000,000 즉, 반복문 1번
 * @param {number} order
 * 기사님이 원하는 상자 순서
 * @returns {number}
 * 실린 상자의 수
 */
function solution(order) {
  const stack = [order[0] - 1];
  let answer = 1;

  for (let i = 1; i < order.length; i++) {
    const box = order[i];
    const boxMinusOne = box - 1;
    const last = stack.length - 1;

    // 다음 값이 더 크다면
    if (box > stack[last]) {
      answer++;
      if (boxMinusOne > stack[last]) {
        continue;
      }
      stack.push(boxMinusOne);
    } else {
      if (stack[last] === box) {
        stack.pop();
        if (box === 1) {
          answer++;
          continue;
        }
        stack.push(boxMinusOne);
        answer++;
      } else {
        break;
      }
    }
  }
  return answer;
}
// console.log(solution([4, 3, 1, 2, 5])); // 2
// console.log(solution([5, 4, 3, 2, 1])); // 5
// console.log(solution([3, 4, 2, 1, 5])); // 5
// console.log(solution([2, 1, 4, 3, 6, 5, 8, 7, 10, 9])); // 10
// console.log(solution([2, 1, 6, 7, 5, 8, 4, 9, 3, 10])); // 10
