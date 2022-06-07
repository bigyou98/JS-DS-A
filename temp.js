const arr = [1, 2, 3];
const qwe = arr.slice();
console.log(arr);
console.log(qwe);

qwe.push(4);
console.log("변경후");
console.log(arr);
console.log(qwe);
