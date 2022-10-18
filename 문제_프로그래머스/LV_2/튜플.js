/**
 *
 * @param {string} s
 * @returns
 */
function solution(s) {
  const answer = [];
  let temp = s
    .slice(2, s.length - 2)
    .split("{")
    .map((item) => {
      return item
        .replace("}", "")
        .split(",")
        .filter((data) => data !== "");
    });
  temp.sort((a, b) => a.length - b.length);

  for (const str of temp) {
    for (const item of str) {
      answer.push(item);
    }
  }
  return [...new Set(answer)].map((v) => +v);
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{20,111},{111}}"));
