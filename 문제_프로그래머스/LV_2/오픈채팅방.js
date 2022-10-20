/**
 * @param {string} record
 * @returns
 */
function solution(record) {
  const temp = record.map((item) => {
    return item.split(" ");
  });

  const map = {};
  temp.forEach((element) => {
    let [type, ID, nickName] = element;
    switch (type) {
      case "Enter":
        map[ID] = nickName;
        break;
      case "Change":
        map[ID] = nickName;
        break;
    }
  });

  const answer = [];
  temp.forEach((element) => {
    let [type, ID] = element;
    switch (type) {
      case "Enter":
        answer.push(`${map[ID]}님이 들어왔습니다.`);
        break;
      case "Leave":
        answer.push(`${map[ID]}님이 나갔습니다.`);
        break;
    }
  });
  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
