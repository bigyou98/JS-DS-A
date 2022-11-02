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
  // 1. 소문자로 만들기
  let filesTemp = [...files].map((file) => file.toLowerCase());

  const temp = [];
  // 2. files의 원소를 숫자를 만난걸 기준으로 배열로 만들기
  for (let i = 0; i < filesTemp.length; i++) {
    const file = filesTemp[i];
    let startIndex;
    let endIndex;
    // 숫자인 곳 찾기
    for (let j = 1; j < file.length; j++) {
      const str = file[j].charCodeAt();
      if (str >= 48 && str <= 57) {
        startIndex = j;
        break;
      }
    }
    for (let index = startIndex + 1; index < startIndex + 5; index++) {
      if (index >= file.length) {
        endIndex = index - 1;
        break;
      }
      const str = file[index].charCodeAt();
      if (str >= 48 && str <= 57) {
        continue;
      } else {
        endIndex = index - 1;
        break;
      }
    }
    // temp에 나눈 배열 담기
    temp.push([
      [...file].slice(0, startIndex).join(""),
      [...file].slice(startIndex, endIndex + 1).join(""),
      [...file].slice(endIndex + 1).join(""),
    ]);
  }

  // temp 정렬하기
  temp.sort((a, b) => {
    return a[0] < b[0]
      ? -1
      : a[0] > b[0]
      ? 1
      : parseInt(a[1]) < parseInt(b[1])
      ? -1
      : parseInt(a[1]) > parseInt(b[1])
      ? 1
      : 0;
  });
  // 대문자였던 것들은 다 자기 모습으로 되돌아가야함

  let answerArr = temp
    .map((data) => {
      return data.join("");
    })
    // 이렇게 하면 만약 같은 문자열인데 대소문자로 구분한것은 구별을 못해주기때문에 틀린 방법임
    .map((item) => {
      return filesTemp.indexOf(item);
    });

    return answerArr.map((index) => {
    return files[index];
  });
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
