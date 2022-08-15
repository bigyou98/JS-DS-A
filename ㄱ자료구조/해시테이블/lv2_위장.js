function solution(clothes = []) {
  let map = new Map();

  clothes.forEach(([name, category]) => {
    if (map.has(category)) {
      map.get(category).push(name);
      map.get(category)[0]++;
    } else {
      map.set(category, [1, name]);
    }
  });
  let temp = [];
  map.forEach(([count]) => {
    temp.push(count);
  });

  return temp.reduce((cur, acc) => cur * (acc + 1), 1) - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
); //5
console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
); // 3

// function fac(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return fac(n - 1) * n;
// }
