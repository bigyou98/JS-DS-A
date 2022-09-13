function solution(n, arr) {
  let x = 1;
  let y = 1;
  arr.forEach((data) => {
    switch (data) {
      case "R":
        if (y < n) {
          y++;
        }
        break;
      case "L":
        if (y > 1) {
          y--;
        }
        break;
      case "U":
        if (x > 1) {
          x--;
        }
        break;
      case "D":
        if (x < n) {
          x++;
        }
        break;
    }
  });
  return [x, y];
}

console.log(solution(5, ["R", "R", "R", "D", "D"]));
