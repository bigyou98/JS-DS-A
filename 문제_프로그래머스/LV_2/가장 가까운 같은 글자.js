/**
 *
 * @param {string} s
 * 처음 나오면 -1
 * 자신의 앞에 있다면 몇칸앞에있는지 표시하기
 * @returns
 */
function solution(s) {
  const answer = [];
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (map.has(element)) {
      answer.push(i - map.get(element).at(-1));
      map.get(element).push(i);
    } else {
      map.set(element, [i]);
      answer.push(-1);
    }
  }
  return answer;
}

console.log(solution("banana"));
