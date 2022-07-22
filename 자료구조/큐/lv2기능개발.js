function solution(progresses = [], speeds = []) {
  const answer = [];
  let index = 0;
  let day = 0;
  while (index < progresses.length) {
    // 하루씩 증가
    day++;
    let count = 0;

    for (let i = index; i < progresses.length; i++) {
      if (100 <= progresses[index] + speeds[index] * day) {
        index++;
        count++;
      } else {
        break;
      }
    }
    if (count > 0) {
      answer.push(count);
    }
  }
  return answer;
}

// console.log(solution([93, 30, 55], [1, 30, 5])); // [2,1]
// console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1,3,2]
console.log(solution([96, 94], [3, 3])); // [2]
