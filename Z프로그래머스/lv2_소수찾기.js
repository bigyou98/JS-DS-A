// 소수를 몇개 만들 수 있는지

// 경우의 수와 소수찾기가 관건
function solution(numbers = "") {
  let arr = numbers.split("");
  let temp = [];
  for (let i = 1; i <= arr.length; i++) {
    temp.push(re(arr, i));
  }
  temp = temp.flatMap((x) => x).map((x) => Number(x.join("")));
  temp = [...new Set(temp)];
  console.log(temp);
  function re(arr, selectNum) {
    let result = [];
    if (selectNum == 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const combinations = re(rest, selectNum - 1);
      const attached = combinations.map((el) => [fixed, ...el]);

      result.push(...attached);
    });
    return result;
  }

  let answer = 0;
  function is_prime(num) {
    if (num === 0 || num === 1) {
      return false;
    }

    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (const item of temp) {
    console.log(is_prime(item));
    if (is_prime(item)) {
      answer++;
    }
  }
  return answer;
}

console.log(solution("17")); // 3
console.log(solution("011")); // 2
