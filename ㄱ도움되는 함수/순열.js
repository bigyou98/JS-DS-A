// 배열에서 n개를 선택해 조합한 모든 경우의 수를 반환함
// 순서가 있다.. 모든 경우의 수임
// 조합의 2배임

function permutations(arr, n) {
  // 1개만 뽑는다면 그대로 순열을 반환한다. 탈출 조건으로도 사용된다.
  if (n === 1) return arr.map((v) => [v]);
  let result = [];

  // 요소를 순환한다
  arr.forEach((fixed, idx, arr) => {
    // 현재 index를 제외한 요소를 추출한다.
    // index번째는 선택된 요소
    const rest = arr.filter((_, index) => index !== idx);
    // 선택된 요소를 제외하고 재귀 호출한다.
    const perms = permutations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 순열을 합쳐준다.
    const combine = perms.map((v) => [fixed, ...v]);
    // 결과 값을 추가한다.
    result.push(...combine);
  });

  // 결과 반환
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
