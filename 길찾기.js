let board = `%e%%%%%%%%%\n%...%.%...%\n%.%.%.%.%%%\n%.%.......%\n%.%%%%.%%.%\n%.%.....%.%\n%%%%%%%%%x%`;

let rows = board.split("\n");
console.log(rows);

// 2차원 배열로 만들기
let mazeMatrix = rows.map((row) => {
  return row.split("");
});

// e에서 x로 가는 길 찾기

// 해당 위치 찾기
const findChar = (char, arr = []) => {
  let row = arr.length;
  let column = arr[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (char === arr[i][j]) {
        return [i, j];
      }
    }
  }
};

// 미로 출력하기
const printM = (arr) => {
  let str = "";
  let row = arr.length;
  let column = arr[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      str += arr[i][j];
    }
    str += "\n";
  }

  console.error(str);
};

// printM(mazeMatrix);

const mazePathFinder = (arr) => {
  let row = arr.length - 1;
  let column = arr[0].length - 1;
  let startPoint = findChar("e", arr);
  let endPoint = findChar("x", arr);

  function path(x, y) {
    // 숫자를 넘거나 작을 때
    if (x > row || y > column || x < 0 || y < 0) {
      return false;
    }
    // 찾은 경우
    if (x === endPoint[0] && y === endPoint[1]) {
      return true;
    }
    if (arr[x][y] === "%" || arr[x][y] === "+") {
      return false;
    }

    // 현재의 위치
    arr[x][y] = "+";
    // 이동하는 거 보여주기
    printM(arr);

    if (path(x, y - 1) || path(x + 1, y) || path(x - 1, y) || path(x, y + 1)) {
      return true;
    }
    
    arr[x][y] = ".";

    // 다 아닌 경우
    return false;
  }

  path(startPoint[0], startPoint[1]);
};

mazePathFinder(mazeMatrix);
