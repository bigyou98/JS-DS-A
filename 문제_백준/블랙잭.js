let input = require("fs").readFileSync("예제.txt").toString().split("\n");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
input[0] = input[0].split(" ");
const arr = input[1].split(" ").map((element) => Number(element));
const N = Number(input[0][0]);
const M = Number(input[0][1]);

let answer = 0;
for (let i = 0; i < arr.length - 2; i++) {
  for (let j = i + 1; j < arr.length - 1; j++) {
    for (let k = j + 1; k < arr.length; k++) {
      let temp = arr[i] + arr[j] + arr[k];
      if (temp > M) {
        continue;
      }
      answer = Math.max(answer, temp);
    }
  }
}

console.log(answer);
