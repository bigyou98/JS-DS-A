// js 버전은 없어서 채점은 못함
function solution(phone_list = []) {
  // 배열을순회하여 map에 넣는다.

  for (let i = 0; i < phone_list.length; i++) {
    for (let j = i + 1; j < phone_list.length; j++) {
      if (
        phone_list[i].includes(phone_list[j]) ||
        phone_list[j].includes(phone_list[i])
      ) {
        // 접두어인지 파악해야함
        if (phone_list[j][0] === phone_list[i][0]) return false;
      }
    }
  }
  return true;
}

console.log(solution(["119", "97674223", "1195524421"])); // false
console.log(solution(["123", "456", "789"])); // true
console.log(solution(["12", "123", "1235", "567", "88"])); // false
