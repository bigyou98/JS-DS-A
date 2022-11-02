/**
 *
 * @param {string[]} files
 * string
 * 1. 헤드
 * 2. 숫자
 * 3. 확장자 및 숫자 뒤에 값
 * @returns
 */
function solution(files) {
  // 숫자인 곳 찾기
  function findHeadOrNumber(file) {
    let startIndex;
    let endIndex;
    for (let j = 1; j < file.length; j++) {
      const str = file[j].charCodeAt();
      if (str >= 48 && str <= 57) {
        startIndex = j;
        break;
      }
    }
    for (let index = startIndex + 1; index < startIndex + 5; index++) {
      if (index >= file.length) {
        endIndex = index;
        break;
      }
      const str = file[index].charCodeAt();
      if (str >= 48 && str <= 57) {
        continue;
      } else {
        endIndex = index;
        break;
      }
    }

    return [
      file.slice(0, startIndex).toLowerCase(),
      parseInt(file.slice(startIndex, endIndex)),
    ];
  }

  const answer = files.sort((a, b) => {
    let [headA, numberA] = findHeadOrNumber(a);
    let [headB, numberB] = findHeadOrNumber(b);
    // 오름차순임
    return headA < headB
      ? -1
      : headA > headB
      ? 1
      : numberA < numberB
      ? -1
      : numberA > numberB
      ? 1
      : 0;
  });

  return answer;
}

console.log(
  solution([
    "F-5 Freedom Fighter",
    "B-50 Superfortress",
    "A-10 Thunderbolt II",
    "F-14 Tomcat",
  ])
);
console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
);

// 1,2만 맞고 3~20까지 다 틀림... ㅠㅠ

// 뭘 놓치고 있을까 => 정렬 부분이 제대로 안되는 것 같은데 하하..
