const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
let input = require("fs").readFileSync(filePath).toString();
input = parseInt(input);
let answer = "";

for (let i = 1; i <= input; i++) {
  answer += i + "\n";
}
