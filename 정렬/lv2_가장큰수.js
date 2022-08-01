function solution(numbers) {
  const answer = numbers
    .map((c) => c + "") // 정렬을 위해 문자열로 바꿔줘야 진짜 더하기를 안함
    .sort((a, b) => b + a - (a + b)) // 내림차순으로
    //  330 303으로 비교해서 330이 더 크기때문에 앞쪽의 위치한다.
    .join("");

  return answer[0] === "0" ? "0" : answer;
}

console.log(solution([6, 10, 2]));
