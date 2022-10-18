function solution(babbling = []) {
  let answer = 0;
  const dict = ["aya", "ye", "woo", "ma"];
  const noDict = ["ayaaya", "yeye", "woowoo", "mama"];

  for (let i = 0; i < babbling.length; i++) {
    let text = babbling[i];
    noDict.forEach((item) => {
      text = text.replaceAll(item, "X");
    });
    dict.forEach((item = "") => {
      text = text.replaceAll(item, "");
    });
    if (text.length === 0) {
      answer++;
    }
  }
  return answer;
}

// console.log(solution(["aya", "yee", "u", "maa"]));
// console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])); 
