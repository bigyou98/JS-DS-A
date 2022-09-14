// arr은 2차원 배열
function solution(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    let 행중에서가장작은값 = Math.min(...arr[i]);
    if (행중에서가장작은값 > answer) {
      answer = 행중에서가장작은값;
    }
  }
  return answer;
}

console.log(
  solution([
    [3, 1, 2],
    [4, 1, 4],
    [2, 2, 2],
  ])
);

console.log(
  solution([
    [7, 3, 1, 8],
    [3, 3, 3, 4],
  ])
);

// 해당 행에서 가장 숫자가 낮은 카드를 뽑아야함
