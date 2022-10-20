/**
 *
 * @param {number[]} fees
 * 주차 요금 표
 * 0 : 기본 시간 (분)
 * 1 : 기본 요금 (원)
 * 2 : 단위 시간 (분)
 * 3 : 단위 요금 (원)
 * @param {string[]} records
 * '시각 차량번호 내역' -> 공백으로 구분
 * 시각 : HH:MM 형식의 5 길이 -> 00:00 ~ 23:59
 * 차량번호 : '0'~'9' -> ex) '9999'
 * 내역 : 'IN' or 'OUT'
 * records의 원소들은 시각을 기준으로 오름차순으로 정렬되어 주어집니다.
 * 하루 동안만 주어짐 -> 다음날 출차한거는 없음
 *
 * @returns 차량 번호가 작은 자동차부터 청구할 주차 요금을 차례대로 정수 배열
 */
function solution(fees, records) {
  const [기본시간, 기본요금, 단위시간, 단위요금] = fees;
  const map = {};
  records.forEach((item) => {
    let [time, carNumber, in_out] = item.split(" ");
    if (!(carNumber in map)) {
      map[carNumber] = "";
    }
    map[carNumber] = map[carNumber] + time;
  });

  const total = Object.entries(map).map((car) => {
    let [carNumber, str] = car;
    return [parseInt(carNumber), str.match(/...../g)];
  });
  total.sort((a, b) => a[0] - b[0]);

  total.forEach((item) => {
    if (item[1].length % 2 === 1) {
      item[1].push("23:59");
    }
  });
  const answer = [];

  total.forEach(([_, times]) => {
    let 주차시간 = 0;
    for (let i = 0; i < times.length; i += 2) {
      let [inTimeH, inTimeM] = times[i].split(":");
      let inTime = parseInt(inTimeH) * 60 + parseInt(inTimeM);
      let [outTimeH, outTimeM] = times[i + 1].split(":");
      let outTime = parseInt(outTimeH) * 60 + parseInt(outTimeM);

      주차시간 += outTime - inTime;
    }
    answer.push(주차시간);
  });
  return answer.map((주차시간) => {
    if (주차시간 < 기본시간) {
      return 기본요금;
    } else {
      return Math.ceil((주차시간 - 기본시간) / 단위시간) * 단위요금 + 기본요금;
    }
  });
}
console.log(
  solution(
    [120, 0, 60, 591],
    [
      "16:00 3961 IN",
      "16:00 0202 IN",
      "18:00 3961 OUT",
      "18:00 0202 OUT",
      "23:58 3961 IN",
    ]
  )
);
console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);
