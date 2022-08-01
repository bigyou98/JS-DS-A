function solution(number = "", k) {
  const stack = [];
  let count = 0;

  for (const item of number) {
    // 스택의 마지막 값이 들어올 값보다 작으면 계속 pop해주기
    while (count < k && stack[stack.length - 1] < item) {
      stack.pop();
      count++;
    }
    stack.push(item);
  }
  while (count < k) {
    stack.pop();
    count++;
  }
  return stack.join();
}
// console.log(solution("1924", 2)); // "94"
// console.log(solution("1231234", 3)); // "3234"
console.log(solution("4177252841", 4)); // "775841"

// 1 1 2 2 4 5 7 7 8
