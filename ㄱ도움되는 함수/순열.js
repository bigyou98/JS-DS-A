// arr에서 n개로 조합할 수 있는 모든 경우를 반환한다.
// 순서가 있다... 즉, 모든 경우의 수를 나타낸다.
// 조합의 2배임

function permutations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  let result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.filter((_, index) => index !== idx);
    const perms = permutations(rest, n - 1);
    const combine = perms.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}

console.log(permutations([1, 2, 3, 4], 2));
// [
//   [ 1, 2 ], [ 1, 3 ],
//   [ 1, 4 ], [ 2, 1 ],
//   [ 2, 3 ], [ 2, 4 ],
//   [ 3, 1 ], [ 3, 2 ],
//   [ 3, 4 ], [ 4, 1 ],
//   [ 4, 2 ], [ 4, 3 ]
// ]
