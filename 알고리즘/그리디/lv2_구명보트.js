// https://school.programmers.co.kr/learn/courses/30/lessons/42885
// 60점, 시간초과

function solution(people = [], limit) {
  let answer = 0;
  // 내림차순 1,2,3,4
  people.sort((a, b) => a - b);

  // 사람들이 다 탈 때까지
  while (people.length > 0) {
    // 사람 1명일 단 태움
    let escape = [people.pop()];

    // 탄 사람의 총량
    let escapeSum = escape.reduce((acc, cur) => cur + acc, 0);

    // 한계까지 태우기
    if (limit > escapeSum) {
      // 큰거부터 넣어보기
      for (let i = people.length - 1; i >= 0; i--) {
        // 한계까지 태울수 있으면 pop하고 태우기
        if (limit >= escapeSum + people[i]) {
          escape.push(people[i]);
          people.splice(people.indexOf(people[i]), 1);
        }
        escapeSum = escape.reduce((acc, cur) => cur + acc, 0);
      }
    }
    answer++;
  }
  return answer;
}
// 정답
function solution(people = [], limit) {
  let answer = 0;
  people = people.sort((a, b) => b - a);

  // 답도 증가해야함

  for (let i = 0, j = people.length - 1; i <= j; i++, answer++)
    if (people[i] + people[j] <= limit) j--;

  return answer;
}
// console.log(solution([70, 50, 80, 50], 100)); // 3
// console.log(solution([70, 80, 50], 100)); // 3
// console.log(solution([70, 50, 80, 50], 100)); // 3
// console.log(solution([20, 50, 50, 80], 100)); // 2
// console.log(solution([40, 50, 60, 70, 80, 90], 100)); // 5
// console.log(solution([40, 40, 80], 160)); // 1
// console.log(solution([40, 40, 40], 100)); // 2
console.log(solution([10, 20, 30, 40, 50, 60, 70, 80, 90], 100)); // 5
