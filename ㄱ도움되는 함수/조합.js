// arr 에서 n개로 조합할 수 있는 모든 경우를 반환한다.
// 순서가 없다. => 그냥 선택만 함
// 즉 중복이 없다

function combinations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combis = combinations(rest, n - 1);
    const combine = combis.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}

console.log(combinations([1, 2, 3, 4], 2));
// [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
