function solution(operations = []) {
  const arr = [];

  for (const oper of operations) {
    switches(oper);
  }

  function switches(value) {
    if (value[0] === "I") {
      // 값 삽입
      let result = value.replace(/[I]/g, "").trim();
      arr.push(Number(result));
      arr.sort((a, b) => b - a);
    } else if (value === "D 1") {
      arr.shift();
    } else if (value === "D -1") {
      arr.pop();
    } else {
      console.log("알수 없는 값입니다.");
    }
  }
  if (arr.length === 0) {
    return [0, 0];
  } else if (arr.length === 0) {
    return [arr[0]];
  } else {
    return [arr[0], arr[arr.length - 1]];
  }
}

console.log(
  solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])
); //	[0,0]

console.log(
  solution([
    "I -45",
    "I 653",
    "D 1",
    "I -642",
    "I 45",
    "I 97",
    "D 1",
    "D -1",
    "I 333",
  ])
); //[333, -45]
