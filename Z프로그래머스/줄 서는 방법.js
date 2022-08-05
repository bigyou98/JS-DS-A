function solution(n, k) {
  let arr = Array.from(Array(n), (_, i) => {
    return i + 1;
  });

  function permutations(arr, n) {
    if (n === 1) return arr.map((v) => [v]);
    let result = [];
    arr.forEach((fixed, idx, arr) => {
      const rest = arr.filter((_, index) => index !== idx);
      const perms = permutations(rest, n - 1);
      const combine = perms.map((v) => [fixed, ...v]);
      result.push(...combine);
    });

    // 결과 반환
    return result;
  }
  // return permutations(arr, n)[k];
  return permutations(arr, n)[k - 1];
}

console.log(solution(3, 5));
