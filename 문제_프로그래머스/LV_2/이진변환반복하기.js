function solution(s = "") {
  let count = 0;
  let zeroCount = 0;

  while (s !== "1") {
    count++;
    let temp = [...s];
    temp = temp.filter((s) => {
      if (s === "0") {
        zeroCount++;
      }
      return s !== "0";
    });
    let length = temp.length.toString(2);
    s = length;
  }
  return [count, zeroCount];
}

console.log(solution("110010101001"));
