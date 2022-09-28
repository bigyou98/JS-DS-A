function solution(word) {
  function sumSquare(index) {
    let sum = 0;
    for (let i = index; i >= 0; i--) {
      sum += 5 ** i;
    }
    return sum;
  }
  let answer = 0;
  const aeiou = { A: 0, E: 1, I: 2, O: 3, U: 4 };

  [...word].forEach((w, index) => {
    const val = aeiou[w];
    answer += val * sumSquare(4 - index) + 1;
  });

  return answer;
}
// 출처: https://nukw0n-dev.tistory.com/18 [찐이의 개발 연결구과:티스토리]
console.log(solution("AAAAE")); //6
console.log(solution("EIO")); //6

console.log([..."AAAAE"]);
// [ 'A', 'A', 'A', 'A', 'E' ]
