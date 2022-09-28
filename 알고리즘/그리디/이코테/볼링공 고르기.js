/**
 *
 * @param {int} n
 * 볼링공의 개수
 * @param {int} m
 * 볼링공의 최대무게
 * @param {int[]} arr
 * 볼링공의 무게 배열
 */
function solution(n, m, arr) {
  const array = Array(11).fill(0);

  // 해당하는 걸로 1씩 증가
  arr.forEach((i) => {
    array[i] += 1;
  });

  let result = 0;

  for (let i = 1; i < array.length; i++) {
    n -= array[i]; // 총 개수에서 해당하는 볼링공 개수씩 빼기
    result += array[i] * n; // B가 선택할수있는 경우의수를 더해준다.
  }

  return result;
}

console.log(solution(5, 3, [1, 3, 2, 3, 2]));
