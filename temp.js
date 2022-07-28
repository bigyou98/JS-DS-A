const message = "안녕하세요 010-2789-3655로 연락주세요";

const regExp = /(\d{3})-(\d{3,4})-(\d{4})/;

console.log(message.match(regExp));
// [
//   '010-2789-3655',
//   '010',
//   '2789',
//   '3655',
//   index: 6,
//   input: '안녕하세요 010-2789-3655로 연락주세요',
//   groups: undefined
// ]
