var a = "add";
var b = "b";

console.log(a < b); // 'true'

var a = "add";
var b = "ab";
console.log(a < b); // 'false'

console.log("add" < "ab" == "ad" < "ab"); // 'true'
// 즉 0번째부터 비교 해서 아스키코드 값으로 크기를 따진다.
