// numberOfPrime 메서드는 정수 n을 매개변수로 입력받는다. 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하도록 numberOfPrime 함수를 완성하라. 예를 들어 10을 입력받았다면, 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환한다.

// 소수(素數, prime number)는 2, 3, 5, 7, 11, 13, 17…과 같이 1과 자신 이외의 어떤 수로도 나눠지지 않는 1보다 큰 양의 정수이다.

function numberOfPrime(n) {
  const array = Array.from({ length: n }, (_, i) => i + 1);

  function judge (num) {
    let res = true;
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) count++;
      if (count > 2 || num === 1) res = false;
    }
    return res;
  }

  return array.filter(v => judge(v)).length;
}

console.log(numberOfPrime(10)); // 4