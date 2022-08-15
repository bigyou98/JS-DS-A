// map
// set
// object 사용하셈
// 나는 map 좋아함
// 해당 key에 value을 객체를 넣어서 그안에 또 배열로 넣어서 배열로 다루기 쉬움
const map = new Map([]);
map.set("상훈", [1, 2, 3]);
console.log(map); // Map(1) { '상훈' => [ 1, 2, 3 ] }

map.get("상훈").push(4);
console.log(map); // Map(1) { '상훈' => [ 1, 2, 3, 4 ] }
