function solution(s) {
  let sArr = [...s];
  while (true) {
    let count = 1;
    for (let i = 1; i < sArr.length; i++) {
      const cur = sArr[i - 1];
      const next = sArr[i];
      // 알파벳이 2개 붙어있는 짝을 찾는다.
      if (cur === next) {
        // 제거한다
        // 앞뒤 문자열을 이어 붙인다
        sArr.splice(i - 1, 2);
        break;
      } else {
        count++;
        if (count === sArr.length) {
          return 0;
        }
      }
    }
    if (sArr.length === 0) {
      return 1;
    }
  }
}

console.log(solution("baabaa")); //1
console.log(solution("cdcd")); //0
