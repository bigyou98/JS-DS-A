function solution(board = []) {
  const x = board.length;
  const y = board[0].length;
  let answer = 0;
  if (x < 2 || y < 2) {
    return 1;
  }

  for (let i = 1; i < x; i++) {
    for (let j = 1; j < y; j++) {
      if (board[i][j] !== 0) {
        let minNum = Math.min(
          board[i - 1][j],
          board[i][j - 1],
          board[i - 1][j - 1]
        );
        board[i][j] = board[i][j] + minNum;
        if (board[i][j] > answer) {
          answer = board[i][j];
        }
      }
    }
  }
  return answer * answer;
}

console.log(
  solution([
    [0, 0, 1, 1],
    [1, 1, 1, 1],
  ])
); //9
