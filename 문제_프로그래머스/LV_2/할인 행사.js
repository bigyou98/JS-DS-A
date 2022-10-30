/**
 *
 * @param {string[]} want
 * 원하는 제품 배열
 * @param {number[]} number
 * 원하는 제품의 수량
 * @param {string[]} discount
 * 할인하는 제품
 * @returns {number}
 * 회원 등록시 원하는 제품을 모두 할인 받을 수 있는 날짜의 총 일수
 */
function solution(want, number, discount) {
  let answer = 0;

  for (let i = 0; i < discount.length - 9; i++) {
    let temp = discount.slice(i, i + 10).join("");
    for (let j = 0; j < want.length; j++) {
      if (!temp.includes(want[j])) {
        break;
      }
      for (let _ = 0; _ < number[j]; _++) {
        temp = temp.replace(want[j], "");
      }
      if (temp === "") {
        answer++;
        break;
      }
    }
  }
  return answer;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
); // 3
