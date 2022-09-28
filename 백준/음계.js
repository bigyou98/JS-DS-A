const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

function solution(input) {
  const 오름 = [1, 2, 3, 4, 5, 6, 7, 8]; //
  const 내림 = [8, 7, 6, 5, 4, 3, 2, 1]; //descending
  let 오름count = 0;
  let 내림count = 0;

  input.forEach((data, index) => {
    if (data === 오름[index]) {
      오름count++;
    }
    if (data === 내림[index]) {
      내림count++;
    }
  });

  if (오름count === 8) {
    return "ascending";
  }
  if (내림count === 8) {
    return "descending";
  }
  return "mixed";
}

console.log(solution(input));
