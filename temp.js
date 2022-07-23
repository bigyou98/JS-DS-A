const map = new Map([]);
map.set("상훈", { 나이: 25, 지역: ["인천"] });
// console.log(map);

console.log(...map);
console.log([...map.entries()]);
