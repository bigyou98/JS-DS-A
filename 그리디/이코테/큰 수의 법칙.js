function solution(m, k, arr) {
  const temp = arr.sort((a, b) => b - a);
  let answer = 0;
  while (m > 0) {
    for (let i = 0; i < k; i++) {
      if (m < 1) {
        break;
      }
      answer += temp[0];
      m--;
    }
    if (m < 1) {
      break;
    }
    answer += temp[1];
    m--;
  }
  return answer;
}

// m번 더해서 가장 큰수를 만들어라
// 특정한 인덱스에 해당 하는 수가 연속해서 k번을 초과해서 더해질수 없다.
console.log(solution(8, 3, [2, 4, 5, 4, 6])); // 46
console.log(solution(7, 2, [3, 4, 3, 4, 3])); // 28
