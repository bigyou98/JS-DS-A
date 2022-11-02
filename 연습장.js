function solution(files) {
  var answer = [];
  const numberRegex = /[0-9]+/;
  answer = files.sort((a, b) => {
    const [matchA, matchB] = [a.match(numberRegex), b.match(numberRegex)];

    const [headA, headB] = [
      a.slice(0, matchA.index).toLowerCase(),
      b.slice(0, matchB.index).toLowerCase(),
    ];
    console.log(headA);
    console.log(headB);
    console.log("---------");
    const [numberA, numberB] = [parseInt(matchA[0]), parseInt(matchB[0])];
    return headA < headB
      ? -1
      : headA > headB
      ? 1
      : numberA < numberB
      ? -1
      : numberA > numberB
      ? 1
      : 0;
  });
  return answer;
}
console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
);
