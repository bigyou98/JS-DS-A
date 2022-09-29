function solution(n, words = []) {
  let count = 0;

  // 하나 넣어놓고 시작
  const tempArr = [words[0][0]];

  while (words.length !== 0) {
    count++;
    for (let i = 1; i < n + 1; i++) {
      if (words.length === 0) {
        return [0, 0];
      }
      let cur = tempArr[tempArr.length - 1];
      let next = words.shift();

      // 이미 있던 값이라면
      if (tempArr.includes(next)) {
        return [i, count];
      } else {
        tempArr.push(next);
      }
      // 끝말이 다르다면
      if (cur[cur.length - 1] !== next[0]) {
        return [i, count];
      }
    }
  }

  return [0, 0];
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
); //[3,3]

console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
); //[0,0]
console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
); //[1,3]
