/**
 *
 * @param {string} dirs
 *  'U', 'D', 'R', 'L' 로 이뤄진 문자열
 * @returns {number}
 * 처음 걸어본 길의 길이
 */
function solution(dirs) {
  const set = new Set();
  const player = [0, 0];
  for (const command of dirs) {
    switch (command) {
      case "D":
        if (player[1] <= -5) {
          break;
        }
        set.add(`${player[0]}${player[1]}${player[0]}${player[1] - 1}`);
        set.add(`${player[0]}${player[1] - 1}${player[0]}${player[1]}`);
        player[1]--;
        break;
      case "U":
        if (player[1] >= 5) {
          break;
        }
        set.add(`${player[0]}${player[1]}${player[0]}${player[1] + 1}`);
        set.add(`${player[0]}${player[1] + 1}${player[0]}${player[1]}`);
        player[1]++;
        break;
      case "R":
        if (player[0] >= 5) {
          break;
        }
        set.add(`${player[0]}${player[1]}${player[0] + 1}${player[1]}`);
        set.add(`${player[0] + 1}${player[1]}${player[0]}${player[1]}`);
        player[0]++;
        break;
      case "L":
        if (player[0] <= -5) {
          break;
        }
        set.add(`${player[0]}${player[1]}${player[0] - 1}${player[1]}`);
        set.add(`${player[0] - 1}${player[1]}${player[0]}${player[1]}`);
        player[0]--;
        break;
    }
  }
  return set.size / 2;
}
console.log(solution("ULURRDLLU")); //7
console.log(solution("LULLLLLLU")); //7
// console.log(solution("UDU")); //1
