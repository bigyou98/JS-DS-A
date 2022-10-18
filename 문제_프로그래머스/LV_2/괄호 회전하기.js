/**
 *  s의 길이 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return
 * @param {string} s
 * @returns
 */
function solution(s) {
  let answer = 0;
  const stack = [];

  let temp = s;

  for (let i = 0; i < s.length; i++) {
    temp = temp.slice(1) + temp[0];
    stack.length = 0;
    for (const str of temp) {
      if (
        (stack.length === 0 && str === ")") ||
        (stack.length === 0 && str === "]") ||
        (stack.length === 0 && str === "}")
      ) {
        stack.push(null);
        break;
      }

      if (stack[stack.length - 1] === "(" && str === ")") {
        stack.pop();
      } else if (stack[stack.length - 1] === "{" && str === "}") {
        stack.pop();
      } else if (stack[stack.length - 1] === "[" && str === "]") {
        stack.pop();
      } else {
        stack.push(str);
      }
    }
    if (stack.length === 0) {
      answer++;
    }
  }
  return answer;
}

console.log(solution("[](){}"));
