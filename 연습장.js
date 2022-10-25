// 빈병 a개당 콜라 b개

// 빈병 n개를 줬을 때 몇 병을 받을 수 있는지

function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    let share = parseInt(n / a);
    n = n - share * a + share * b;
    answer += share;
  }
  return answer;
}
console.log(solution(2, 1, 20)); //19
console.log(solution(3, 1, 20)); //9
