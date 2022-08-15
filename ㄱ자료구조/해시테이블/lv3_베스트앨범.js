// 정답은 맞지만 for문이 많아서 런타임 에러가 뜬다!
// 53점

function solution(genres = [], plays = []) {
  const total = new Map();
  // 장르 : [[고유번호,재생수],[고유번호2,재생수]]
  genres.forEach((genre, i) => {
    // 장르가 있다면
    if (total.has(genre)) {
      total.get(genre).push([i, plays[i]]);
    }
    // 장르가 없다면 추가
    else {
      total.set(genre, [[i, plays[i]]]);
    }
  });
  // 재생수 높은 순서대로 정렬
  total.forEach((v) => {
    v.sort((a, b) => b[1] - a[1]);
  });

  const temp = [];
  total.forEach((v, i) => {
    temp.push([i, v.reduce((sum, cur) => sum + cur[1], 0)]);
  });
  // 총 합계대로 내림차순
  temp.sort((a, b) => b[1] - a[1]);

  const answer = [];

  temp.forEach((genre) => {
    const temp = total.get(genre[0]);
    for (let i = 0; i < 2; i++) {
      answer.push(temp[i][0]);
    }
  });
  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
); // [4, 1, 3, 0]
