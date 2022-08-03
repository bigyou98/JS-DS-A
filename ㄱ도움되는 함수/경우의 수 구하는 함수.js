// arr은 원본 배열
// selectNum은 몇자리 수를 만들지

function re(arr, selectNum) {
  let result = [];
  if (selectNum == 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const combinations = re(rest, selectNum - 1);
    const attached = combinations.map((el) => [fixed, ...el]);

    result.push(...attached);
  });
  return result;
}

console.log(re([1, 2, 3, 4], 4));
// [
//   [1, 2, 3, 4],
//   [1, 2, 4, 3],
//   [1, 3, 2, 4],
//   [1, 3, 4, 2],
//   [1, 4, 2, 3],
//   [1, 4, 3, 2],
//   [2, 1, 3, 4],
//   [2, 1, 4, 3],
//   [2, 3, 1, 4],
//   [2, 3, 4, 1],
//   [2, 4, 1, 3],
//   [2, 4, 3, 1],
//   [3, 1, 2, 4],
//   [3, 1, 4, 2],
//   [3, 2, 1, 4],
//   [3, 2, 4, 1],
//   [3, 4, 1, 2],
//   [3, 4, 2, 1],
//   [4, 1, 2, 3],
//   [4, 1, 3, 2],
//   [4, 2, 1, 3],
//   [4, 2, 3, 1],
//   [4, 3, 1, 2],
//   [4, 3, 2, 1],
// ];
