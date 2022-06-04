// 가까운 정수로 내림
Math.floor();
console.log(Math.floor(1.2)); // 1

// 가까운 정수로 반올림
Math.round();
console.log(Math.round(1.2)); // 1
console.log(Math.round(1.6)); // 2

// 가까운 정수로 올림
Math.ceil();
console.log(Math.ceil(1.3)); // 2

// random
// 0과 1사이의 부동 수소점을 반환함.
// 그래서 올리던가 내리던가 반올림하던가 해야함
Math.random();
console.log(Math.floor(Math.random() * 10)); // 0~9
console.log(Math.floor(Math.random() * 100)); // 0~99
console.log(Math.floor(Math.random() * 13)); // 0~12
console.log(Math.floor(Math.random() * 13)+5); // 5~17
