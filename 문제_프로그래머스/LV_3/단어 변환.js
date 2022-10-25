/**
 *
 * @param {string} begin
 * 시작 단어
 * @param {string} target
 * 변환할 단어
 * @param {string[]} words
 * 단어 배열
 * @returns
 */
function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }

  const queue = [];
  queue.push(begin);

  const tfBox = Array(words.length).fill(true);
  let answer = 0;
  while (!queue.includes(target)) {
    let current = queue.shift();
    queue.length = 0;
    // 비긴과 1개 차이나고 나머지 다 똑같은 것들은 모두 queue에 넣기
    for (let i = 0; i < words.length; i++) {
      if (!tfBox[i]) {
        continue;
      }
      let word = words[i];
      let count = 0;
      // 한글자씩 돌기
      for (let j = 0; j < begin.length; j++) {
        const currentChar = current[j];
        const wordChar = word[j];
        if (currentChar === wordChar) {
          count++;
        }
      }
      // ------------
      if (count === current.length - 1) {
        tfBox[i] = false;
        queue.push(word);
      }
    }
    answer++;
  }
  return answer;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
