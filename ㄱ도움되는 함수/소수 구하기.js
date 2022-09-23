// 소수 : 1과 자기자신만 약수인 수

// 해당 숫자가 소수인지 판단
// 소수는 N의 제곱근보다 큰수로 나눠지지 않는다는 점을 이용
function is_prime(num) {
  if (num === 0 || num === 1) {
    return false;
  }

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// 에라토스테네스의 체 :  가장 효과적임
// 1부터 N까지 모든 소수를 구하는 경우 가장 효율적이다.
function get_primes(num) {
  const prime = [false, false, ...Array(num - 1).fill(true)];

  for (let i = 2; i * i <= num; i++) {
    if (prime[i]) {
      for (let j = i * 2; j <= num; j += i) {
        prime[j] = false;
      }
    }
  }

  // num까지의 소수의 개수를 반환함
  return prime.filter(Boolean).length;

  // number까지 소수 배열을 반환함
  // return prime
  //   .map((v, i) => {
  //     if (v) {
  //       return i;
  //     }
  //   })
  //   .filter(Number);
}

console.log(get_primes(55));
// console.log(is_prime(7));
