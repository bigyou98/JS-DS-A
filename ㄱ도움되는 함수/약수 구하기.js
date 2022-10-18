const getDivisors = (num) => {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (num / i != i) divisors.push(num / i);
    }
  }

  divisors.sort((a, b) => a - b);
  return divisors;
};

console.log(getDivisors(500)); // [ 1, 3, 9, 27 ]
