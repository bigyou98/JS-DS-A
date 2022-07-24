const map = new Map();

map.set("상훈", ["강아지", "앵무새"]);
map.set("선화", "고양이");

console.log([...map.entries()]);
console.log([...map.keys()]);
console.log([...map.values()].flat());
