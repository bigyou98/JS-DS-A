// let input = require("fs").readFileSync("/dev/stdin").toString();
let [n, ...input] = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .split("\n");

input = input.map((data) => {
  return data.split(" ");
});

let answer = "";
for (let i = 0; i < input.length; i++) {
  const [num, str] = input[i];
  for (const s of str) {
    answer += s.repeat(num);
  }
  console.log(answer);
  answer = "";
}
