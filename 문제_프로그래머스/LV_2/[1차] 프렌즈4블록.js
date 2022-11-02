/**
 * 2×2 형태로 4개가 붙어있을 경우 사라지면서 점수를 얻는 게임
 * @param {number} m
 * 입력 판의 높이
 * @param {number} n
 * 입력 판의 너비
 * @param {string[]} board
 * 배치 정보
 * @returns {number}
 * 몇개의 블록이 지워질지 반환
 */
function solution(m, n, board) {
  let answer = 0;

  const dfs = (x, y, count) => {
    // 아래 오른쪽 확인하기
    const current = board[x][y];
    count = Math.max(count, answer);
    let nx = x + 1;
    let ny = y + 1;
    if (nx >= m || ny >= n) {
      return;
    }
    if (board[nx][y] === current) {
      dfs(nx, y, count + 1);
    }
    if (board[nx][y] === current) {
      dfs(x, ny, count + 1);
    }
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, 0);
    }
  }
  // 상하좌우로 보낸다
  return answer;
}

// console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"])); //14
// console.log(
//   solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])
// ); //15

const qwe = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"];

// https://velog.io/@kimjiwonpg98/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%94%84%EB%A0%8C%EC%A6%884%EB%B8%94%EB%A1%9D-javascript
