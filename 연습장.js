// 0일때 에러
// 1 : 1
// 2 : 1 12 1
function qwe(n = 0) {
  if (n === 0) {
    throw Error("에러");
  }
  let answer = "";
  for (let i = 1; i < n + 1; i++) {
    answer += i;
    console.log(answer);
  }

  for (let j = n; j > 1; j--) {
    answer = answer.replace(j, "");
    console.log(answer);
  }
}

qwe(6);
//1
//12
//123
//1234
//123
//12
//1
