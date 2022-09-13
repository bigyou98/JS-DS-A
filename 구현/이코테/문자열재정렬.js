function solution(str = "") {
  let sum = 0;
  let count = 0;
  const temp = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const arr = [...str];
  arr
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .forEach((i) => {
      if (temp.includes(i)) {
        sum += Number(i);
        count++;
      }
    });
  arr.push(sum);
  return arr.slice(count, arr.length + 1).join("");
}

console.log(solution("K1KA5CB7"));
