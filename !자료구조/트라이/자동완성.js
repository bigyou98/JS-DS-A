function solution(words = []) {
  // object에 추가하기
  // object안에 또 object 추가하는 식
  const trie = {};
  for (let word of words) {
    let current = trie;
    for (const char of word) {
      if (!current[char]) {
        // 0 : 학습된 단어의 갯수
        // 1 : 트리
        current[char] = [0, {}];
      }
      current[char][0] = 1 + (current[char][0] || 0);
      current = current[char][1]; // 해당되는 노드로 이동한다
    }
  }
  console.log(trie);
  let answer = 0;
  for (const word of words) {
    // 입력받은 수 만큼 루프
    let count = 0; // 카운팅을 위한 변수
    let current = trie; // 루트부터 시작
    for (const [index, letter] of [...word].entries()) {
      count += 1;
      if (current[letter][0] <= 1) {
        // 단어가 하나 이하로 남을 경우 종료
        break;
      }
      current = current[letter][1]; // 다음 노드로 이동
    }
    answer += count; // 카운팅을 더해준다
  }

  return answer; // 반환
}

console.log(solution(["go", "gone", "guild"])); //7
// console.log(solution(["abc", "def", "ghi", "jklm"])); //4
// console.log(solution(["word", "war", "warrior", "world"])); //15
