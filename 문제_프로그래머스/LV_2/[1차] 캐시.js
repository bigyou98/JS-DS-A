/**
 *도시 이름을 검색하면 해당 도시와 관련된 맛집 게시물들을 데이터베이스에서 읽어 보여주는 서비스
 * 캐시 교체 알고리즘은 LRU : 가장 오랫동안 참조되지 않은 페이지를 교체하는 기법
 * 즉 Queue
 * @param {number} cacheSize
 * @param {string[]} cities
 * @returns {number}
 * 입력된 도시이름 배열을 순서대로 처리할 때, "총 실행시간"을 출력
 */
function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];
  cities.forEach((city) => {
    let item = city.toLowerCase();
    if (cache.includes(item)) {
      answer += 1;
      cache.splice(cache.indexOf(item), 1);
      cache.push(item);
    } else {
      answer += 5;
      cache.push(item);
      if (cache.length > cacheSize) {
        cache.shift();
      }
    }
  });
  return answer;
}

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
); // 21
