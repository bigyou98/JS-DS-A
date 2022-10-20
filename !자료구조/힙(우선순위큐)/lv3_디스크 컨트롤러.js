// +7
function solution(jobs = []) {
  // 요청시간이 낮은 대로 넣기
  jobs.sort((a, b) => a[0] - b[0]);

  let time = jobs[0][0];
  const answer = [];
  let rTime = 0;
  while (jobs.length > 0) {
    // 현재 시간보다 작은 것들 중에 소요시간이 작은 순으로 정렬
    let tempArr = jobs
      .filter((job) => time >= job[0])
      .sort((a, b) => a[1] - b[1]);

    if (tempArr.length > 0) {
      // 오름차순이라 첫번째 요소를 조작하면됨
      const [requestedTime, requiredTime] = tempArr[0];

      // 마지막요소의 반환 시간을 배열에 담기
      time = time + requiredTime;
      rTime = time - requestedTime;
      answer.push(rTime);

      // 제거하는 로직
      jobs.splice(jobs.indexOf(tempArr[0]), 1);
    } else {
      time++;
    }
  }

  return Math.floor(
    answer.reduce((acc, cur) => {
      return acc + cur;
    }, 0) / answer.length
  );
}

// console.log(
//   solution([
//     [0, 3],
//     [1, 9],
//     [2, 6],
//   ])
// ); // 9

// console.log(
//   solution([
//     [1, 9],
//     [1, 4],
//     [1, 5],
//     [1, 7],
//     [1, 3],
//   ])
// ); // 13
// console.log(
//   solution([
//     [0, 9],
//     [0, 4],
//     [0, 5],
//     [0, 7],
//     [0, 3],
//   ])
// ); // 13
// console.log(
//   solution([
//     [0, 5],
//     [1, 2],
//     [5, 5],
//   ])
// ); // 6
// console.log(
//   solution([
//     [24, 10],
//     [18, 39],
//     [34, 20],
//     [37, 5],
//     [47, 22],
//     [20, 47],
//     [15, 2],
//     [15, 34],
//     [35, 43],
//     [26, 1],
//   ])
// ); // 74
// console.log(
//   solution([
//     [0, 10],
//     [4, 10],
//     [5, 11],
//     [15, 2],
//   ])
// ); // 15
// console.log(solution([[0, 10]])); // 10
// console.log(
//   solution([
//     [0, 10],
//     [2, 3],
//     [9, 3],
//   ])
// ); // 9
console.log(
  solution([
    [0, 3],
    [4, 3],
    [10, 3],
  ])
); // 3
