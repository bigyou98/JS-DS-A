/**
 * 1대1 대결
 * 매 대결마다 먹는 음식의 종류와 양이 바뀐다.
 * 선수 1명은 왼쪽부터 먹고
 * 다른 선수는 오른쪽부터 먹는다.
 * 중앙에는 물을 배치하고 물을 먼저 먹은 선수가 우승한다.
 * 두 선수가 먹는 음식의 종류와 칼로리는 같아야한다
 * @param {number[]} food
 * 칼로리가 적은 순서대로 음식이 담겨 있다.
 * [0]은 수웅이가 준비한 물의 양이며 항상 1이다.
 * 즉 [1]부터 음식임
 * @returns {string}
 * 음식 배치를 문자열로 나타내기
 */
function solution(food) {
  let answer = "";
  for (let i = 1; i < food.length; i++) {
    answer += `${i}`.repeat(parseInt(food[i] / 2));
  }
  answer += "0";

  for (let i = food.length - 1; i >= 1; i--) {
    answer += `${i}`.repeat(parseInt(food[i] / 2));
  }

  return answer;
}
console.log(solution([1, 3, 4, 6]));
console.log(solution([1, 7, 1, 2]));
