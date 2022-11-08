/**
 *
 * @param {number[]} numbers
 * x보다 크고
 * x와 비트가 1 ~ 2개 다른 수들 중에서 제일 작은 수
 * @returns {number[]}
 */
function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 === 0) {
      answer.push(number + 1);
    } else {
      let number_binary = "0" + number.toString(2);
      // 뒤에서 찾은 0
      let temp = [...number_binary].reverse().indexOf("0");

      const qwe = [...number_binary];

      // 찾은 0의 자리에는 1을
      qwe[number_binary.length - temp - 1] = "1";
      // 그 앞은 0으로 만들기
      qwe[number_binary.length - temp] = "0";
      answer.push(parseInt(qwe.join(""), 2));
    }
  }
  return answer;
}

console.log(solution([7]));
