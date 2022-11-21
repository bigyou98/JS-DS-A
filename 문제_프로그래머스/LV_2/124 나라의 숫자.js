/**
 *
 * @param {number} n
 * n은 50,000,000이하의 자연수
 * @returns {number}
 * 124 나라에서 사용하는 숫자로 바꾼 값
 */
function solution(n) {
  let answer = "";
  const map = [4, 1, 2];

  // 3으로 나눴을 때 몫으로 계속 변경시켜주면서 진행
  while (n !== 0) {
    // 3으로 나눴을 때 나머지 값에 따라서 지정해주기
    answer = map[n % 3] + answer;

    // 3으로 떨어지는 경우에만 해당 몫에 -1 해주기
    n = n % 3 === 0 ? n / 3 - 1 : parseInt(n / 3);
  }

  return answer;
}

console.log(solution(12));
