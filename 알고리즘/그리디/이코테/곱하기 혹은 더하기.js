function solution(n = "") {
  let answer = Number(n[0]);

  for (let i = 1; i < n.length; i++) {
    const element = Number(n[i]);
    if (answer <= 1 || element <= 1) {
      answer += element;
    } else {
      answer *= element;
    }
  }
  return answer;
}

console.log(solution("02984"));
console.log(solution("567"));
