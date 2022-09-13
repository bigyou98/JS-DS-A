// 떠날 수 있는 모험가의 그룹의 최대 수
function solution(n, persons) {
  let answer = 0;
  let count = 0;
  // 오름차순 정렬
  persons.sort((a, b) => a - b);

  for (const i of persons) {
    count += 1;
    if (count >= i) {
      result += 1;
      count = 0;
    }
  }
  return answer;
}

console.log(solution());
