function solution(str = "") {
  let countZero = 0;
  let countOne = 0;

  if (str[0] === "1") {
    countOne++;
  } else {
    countZero++;
  }
  for (let i = 1; i < str.length; i++) {
    const prev = str[i - 1];
    const cur = str[i];

    if (prev !== cur) {
      if (cur === "1") {
        countOne++;
      } else {
        countZero++;
      }
    }
  }

  return Math.min(countZero, countOne);
}

console.log(solution("01000"));
console.log(solution("1011"));
console.log(solution("0001100"));
console.log(solution("00010100"));
console.log(solution("010101"));
// 010101 // 3
// 101010 //

// 0과 1을 센다
// 제일 작은 값을 반환
