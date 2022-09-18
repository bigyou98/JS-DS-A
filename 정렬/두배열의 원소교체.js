function solution(n, arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => b - a);
  //arr1의 모든원소의 합이 최대가 되도록하는것
  console.log(arr1);
  console.log(arr2);
  for (let i = 0; i < n; i++) {
    [arr1[i], arr2[i]] = [arr2[i], arr1[i]];
  }

  return arr1.reduce((acc, cur) => {
    return acc + cur;
  }, 100);
}

console.log(solution(3, [1, 2, 5, 4, 3], [5, 5, 6, 6, 5]));
