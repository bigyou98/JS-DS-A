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
    // 해당 숫자의 이진수
    let number_binary = number.toString(2);
    let temp = number;
    // 해당 조건이 맞을 때 나가기
    while (true) {
      // 증가하면서 비교해보기
      temp += 1;
      let temp_binary = temp.toString(2);

      // 글자의 개수 서로 맞추기
      // 앞에 넣어주기
      if (temp_binary.length > number_binary.length) {
        number_binary = "0" + number_binary;
      } else if (temp_binary.length < number_binary.length) {
        temp_binary = "0" + temp_binary;
      }
      // 각 2진수 자리 수가 1 ~ 2개 차이나면 push하기
      let count = 0;
      for (let j = 0; j < temp_binary.length; j++) {
        const temp_B = temp_binary[j];
        const num_B = number_binary[j];
        if (count >= 3) {
          break;
        }
        if (temp_B !== num_B) {
          count++;
        }
      }
      if (count <= 2) {
        answer.push(temp);
        break;
      }
    }
  }
  return answer;
}

console.log(solution([7])); // [11]
