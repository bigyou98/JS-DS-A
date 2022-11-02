// 문자열이나 배열에서 연속적으로 숫자나 배열인 부분 찾기
/**
 *
 * @param {string | string[]} str
 * @param {number} n
 * 몇 n까지 이어져있는숫자를 구할 건지
 * @returns
 */
function findNumber(str, n) {
  let startIndex;
  let endIndex;

  for (let j = 1; j < str.length; j++) {
    const str = str[j].charCodeAt();
    if (str >= 48 && str <= 57) {
      startIndex = j;
      break;
    }
  }

  for (let index = startIndex + 1; index < startIndex + n; index++) {
    if (index >= str.length) {
      endIndex = index;
      break;
    }
    const str = str[index].charCodeAt();
    if (str >= 48 && str <= 57) {
      continue;
    } else {
      endIndex = index;
      break;
    }
  }

  return [startIndex, endIndex];
}
