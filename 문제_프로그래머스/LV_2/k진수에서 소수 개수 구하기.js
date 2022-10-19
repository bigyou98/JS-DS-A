/**
 *
 * @param {number} n
 * NlogN까지 가능
 * @param {number} k
 * 진수 단위
 * @returns
 * 변환된 수 안에
 * 1. 소수 양쪽에 0 이 있는 경우
 * 2. 소수 오른쪽에만 0 이 있고 왼쪽엔 아무것도 없는 경우
 * 2. 소수 왼쪽에만 0 이 있고 오른쪽엔 아무것도 없는 경우
 * 4. 소수 양쪽에 아무것도 없는 경우
 * - 소수에 각 자리 수에 0이 포함되어 있다면 소수로 취급 안함
 */
function solution(n, k) {
  const changeN = n.toString(k);
  const changeNArr = changeN.split("0");

  function is_prime(num) {
    if (num === 0 || num === 1) {
      return false;
    }

    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  let answer = 0;

  changeNArr
    .filter((item) => item !== "")
    .forEach((item) => {
      if (is_prime(parseInt(item))) {
        answer++;
      }
    });
  return answer;
}
console.log(solution(437674, 3));
console.log(solution(110011, 10));
