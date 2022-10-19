/**
 * 자카드 유사도 J(A, B) = 두 집합의 교집합 크기/두 집합의 합집합 크기
 * 집합 A와 집합 B가 모두 공집합일 경우에는 나눗셈이 정의되지 않으니 따로 J(A, B) = 1
 *
 * 같은 원소를 중복으로 가질 때
 * 교집합 : 더 적은 수
 * 합집합 : 더 많은 수
 *
 * 문자열은 2문자씩 끊어서 만들 수 있음
 * 영문자로 된 글자 쌍만 유효
 * 기타 공백이나 숫자, 특수 문자가 들어있는 경우는 그 글자 쌍을 버린다
 * 대문자로 toLowerCase하기
 * @param {string} str1
 * @param {string} str2
 * @returns parseInt(자카드 유사도 * 65536)
 */
function solution(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  const str1Arr = [];

  for (let i = 1; i < str1.length; i++) {
    let prevChar = str1[i - 1];
    let prevCharCode = str1[i - 1].charCodeAt();
    let curChar = str1[i];
    let curCharCode = str1[i].charCodeAt();

    if (
      prevCharCode >= 91 ||
      prevCharCode <= 64 ||
      curCharCode >= 91 ||
      curCharCode <= 64
    ) {
      continue;
    }
    str1Arr.push(prevChar + curChar);
  }

  const str2Arr = [];
  for (let i = 1; i < str2.length; i++) {
    let prevChar = str2[i - 1];
    let prevCharCode = str2[i - 1].charCodeAt();
    let curChar = str2[i];
    let curCharCode = str2[i].charCodeAt();

    if (
      prevCharCode >= 91 ||
      prevCharCode <= 64 ||
      curCharCode >= 91 ||
      curCharCode <= 64
    ) {
      continue;
    }
    str2Arr.push(prevChar + curChar);
  }

  const str1Map = {};
  for (const str of str1Arr) {
    if (str in str1Map) {
      str1Map[str]++;
    } else {
      str1Map[str] = 1;
    }
  }

  const str2Map = {};
  for (const str of str2Arr) {
    if (str in str2Map) {
      str2Map[str] += 1;
    } else {
      str2Map[str] = 1;
    }
  }

  let intersection = 0;
  for (const key in str1Map) {
    if (key in str2Map) {
      intersection += Math.min(str1Map[key], str2Map[key]);
    }
  }

  const temp = new Set([...str1Arr, ...str2Arr]);
  let union = 0;
  temp.forEach((item) => {
    if (str1Map[item] && str2Map[item]) {
      union += Math.max(str1Map[item], str2Map[item]);
    } else if (str1Map[item] && !str2Map[item]) {
      union += str1Map[item];
    } else if (!str1Map[item] && str2Map[item]) {
      union += str2Map[item];
    }
  });

  if (intersection === 0 && union === 0) {
    return 65536;
  }
  return parseInt((intersection / union) * 65536);
}

console.log(solution("ab cd cd cd cd", "ab ab ab ef"));
// console.log(solution("aa1+aa2", "AAAA12"));