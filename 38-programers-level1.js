function solution(n) {
  let answer = 0;
  let array = Array.from({ length: n }, (_, i) => i + 1);

  function judge (num) {
    let res = true;
    const sqrt = Math.sqrt(num);
    let count = 0;
    for (let i = 1; i <= sqrt; i++) {
      if (num % i === 0) count++;
      if (count > 1 || num === 1) {
        res = false;
        break;
      };
    }
    return res;
  }

  while (array.length > 1) {
    let num = array[1];

    if (judge(num)) {
      array = array.filter(v => v % num !== 0);
      answer++;
    }
  }

  return answer;
}

console.log(solution(10));
