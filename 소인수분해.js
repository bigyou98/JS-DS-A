function 소인수분해(n) {
  let temp = n;
  let result = [];

  while (temp % 2 === 0) {
    result.push(2);
    temp /= 2;
  }

  for (var i = 3; i * i <= temp; i = i + 2) {
    while (temp % i === 0) {
      result.push(i);
      temp = temp / i;
    }
  }

  if (temp > 2) {
    result.push(temp);
  }
  return result;
}

console.log(소인수분해(10));
