function solution(n) {
  const temp = n.toString().split("");
  let sum1 = 0;
  let sum2 = 0;
  const length = temp.length;
  temp.forEach((v, i) => {
    if (i >= length / 2) {
      sum2 += Number(v);
    } else {
      sum1 += Number(v);
    }
  });

  return sum1 === sum2 ? "LUCKY" : "READY";
}

console.log(solution(123402));
console.log(solution(7755));
