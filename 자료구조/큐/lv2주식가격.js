function solution(prices = []) {
  const answer = [];
  for (let i = 0; i < prices.length; i++) {
    let count = 0;
    for (let j = i + 1; j < prices.length; j++) {
      count++;
      // 크거나 같으면 멈춤
      if (prices[i] > prices[j]) {
        break;
      }
    }
    answer.push(count);
  }
  return answer;
}

console.log(solution([1, 2, 3, 2, 3])); // [4,3,1,1,0]
console.log(solution([4, 1, 2, 1, 0])); // [1,3,1,1,0]
