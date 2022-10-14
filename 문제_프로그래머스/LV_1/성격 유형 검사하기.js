/**
 *
 * @param {string[]} survey
 * "RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA"
 * @param {number[]} choices
 *1	매우 비동의
 *2	비동의
 *3	약간 비동의
 *4	모르겠음
 *5	약간 동의
 *6	동의
 *7	매우 동의
 * @returns 성격 유형
 */

function solution(survey, choices) {
  let answer = "";
  const map = { A: 0, R: 0, T: 0, F: 0, C: 0, M: 0, J: 0, N: 0 };
  for (let i = 0; i < survey.length; i++) {
    let [char1, char2] = survey[i].split("");
    let point = choices[i];

    if (point === 1) {
      map[char1] += 3;
    } else if (point === 2) {
      map[char1] += 2;
    } else if (point === 3) {
      map[char1] += 1;
    } else if (point >= 5 && point <= 7) {
      map[char2] += point - 4;
    }
  }
  console.log(map);
  if (map["R"] >= map["T"]) {
    answer += "R";
  } else {
    answer += "T";
  }
  if (map["C"] >= map["F"]) {
    answer += "C";
  } else {
    answer += "F";
  }
  if (map["J"] >= map["M"]) {
    answer += "J";
  } else {
    answer += "M";
  }
  if (map["A"] >= map["N"]) {
    answer += "A";
  } else {
    answer += "N";
  }

  return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
