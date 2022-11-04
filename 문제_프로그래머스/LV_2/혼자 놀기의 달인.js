/**
 *
 * @param {number[]} cards
 * @returns {number}
 * 얻을 수 있는 최고 값
 */
[8, 6, 3, 7, 2, 5, 1, 4];

function solution(cards) {
  // 갔는지 아닌지에 대한 배열 만들어주기
  // 0 버리고 1부터 사용할거임
  const visited_cards = Array(cards.length).fill(false);
  let index = 0;
  let temp = "";
  while (visited_cards.some((data) => data === false)) {
    // 만약 방문하지 않았다면
    if (!visited_cards[cards[index] - 1]) {
      // 방문 표시
      visited_cards[cards[index] - 1] = true;
      // 그 다음 위치로 이동
      index = cards[index] - 1;
      temp += "1";
    }
    // 방문했다면
    else {
      temp += ",";
      if (index > cards.length) {
        index = 0;
      }
      index++;
    }
  }

  const answerArr = temp
    .split(",")
    .filter((item) => item !== "")
    .map((item) => item.length)
    .sort((a, b) => b - a);
  if (answerArr.length === 1) {
    return 0;
  }
  return answerArr[0] * answerArr[1];
}

// console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]));
console.log(solution([10, 5, 6, 7, 8, 9, 1, 2, 3, 4]));
console.log(solution([2, 3, 1])); // 0
