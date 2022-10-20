/**
 *
 * @param {int} sum
 * @param {int[]} arr
 * @returns 합이 sum이되는 부분 집합의 개수
 */
function twoPointer(sum, arr) {
  let count = 0;
  let interval_sum = 0;
  let end = 0;
  for (let i = 0; i < arr.length; i++) {
    while (interval_sum < sum && end < arr.length) {
      interval_sum += arr[end];
      end++;
    }
    if (interval_sum === sum) {
      count++;
    }
    interval_sum -= arr[i];
  }
  return count;
}

console.log(twoPointer(5, [1, 2, 3, 2, 5]));
