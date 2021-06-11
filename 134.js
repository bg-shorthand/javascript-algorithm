function solution(day, k) {
  let answer = [(day + k - 1) % 7];
  let firstDay = day;
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  for (let i = 0; i < 11; i++) {
    firstDay = (firstDay + days[i]) % 7;
    answer.push((firstDay + k - 1) % 7);
  }

  return answer.map((v) => (v === 5 || v === 6 ? 1 : 0));
}

console.log(solution(6, 25));
