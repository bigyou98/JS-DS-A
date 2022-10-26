/**
 *
 * @param {string} skill
 * 선행스킬 순서
 * @param {string[]} skill_trees
 * 유저들이 만든 스킬트리
 * @returns {number}
 * 가능한 스킬트리의 개수
 */
function solution(skill, skill_trees) {
  let answer = 0;
  for (const user_skills of skill_trees) {
    const check = [...user_skills]
      .filter((s) => skill.includes(s))
      .map((s) => skill.indexOf(s));

    if (equal(check)) {
      answer++;
    }
  }
  function equal(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== i) {
        return false;
      }
    }
    return true;
  }
  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])); //2
// 방법1 . skill의 순서대로 index 기억해두기
