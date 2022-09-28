function solution(s) {
  if (s[0] === ")") {
    return false;
  }

  const arr = [...s];

  let left = 0;
  for (const i of arr) {
    if (left < 0) {
      return false;
    }

    if (i === "(") {
      left++;
    } else if (i === ")") {
      left--;
    }
  }

  return left === 0 ? true : false;
}

console.log(solution("())(()")); // f
