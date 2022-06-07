const array = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

function spiralPrint(M) {
  let currentX = 0,
    currentY = 0,
    totalX = M.length - 1,
    totalY = M[0].length - 1;

  while (currentX < totalX && currentY < totalY) {
    for (var col = 0; col <= totalY; col++) {
      console.log(M[currentX][col]);
    }
    currentX++;
    for (var row = currentX; row <= totalX; row++) {
      console.log(M[row][totalY]);
    }
    totalY--;
    if (currentX <= totalX) {
      for (var col = totalY; col > 0; col--) {
        console.log(M[totalX][col]);
      }
      totalX--;
    }
    if (currentY <= totalY) {
      for (var row = totalX; row > currentX; row--) {
        console.log(M[row][currentY]);
      }
      currentY++;
    }
  }
}
spiralPrint(array);
