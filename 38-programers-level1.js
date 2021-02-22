function solution (n) {
  let answer = 0;
  const array = Array.from({ length: n }, (_, i) => i + 1);

  for (let i = 1; i < array.length; i++) {
    if (array[i] !== 0) {
      for (let j = i + array[i]; j <= n; j += array[i]) {
        array[j] = 0;
      };
      answer++;
    }
  }

  return answer;
}

console.log(solution(100));
