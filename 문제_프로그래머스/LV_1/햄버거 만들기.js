/**
 * 순서 : 빵1 야채2 고기3 빵1
 * @param {number} ingredient
 * @returns {number} 포장할수 있는 햄버거의 수
 */
// function solution(ingredient) {
//   ingredient = ingredient.join("");
//   const target = "1231";
//   let answer = 0;
//   while (ingredient.includes(target)) {
//     answer++;
//     ingredient = ingredient.replace(target, "");
//   }
//   return answer;
// }

// 1번째 풀이 시간 초과

function solution(ingredient) {
  const temp = [];
  let answer = 0;
  let length = ingredient.length;
  for (let i = 0; i < length; i++) {
    temp.push(ingredient[i]);
    let TL = temp.length;
    if (
      temp[TL - 1] === 1 &&
      temp[TL - 2] === 3 &&
      temp[TL - 3] === 2 &&
      temp[TL - 4] === 1
    ) {
      answer++;
      temp.pop();
      temp.pop();
      temp.pop();
      temp.pop();
    }
  }
  return answer;
}
console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); //2
