// 자연수 n을 이진법으로 변환했을 때 나오는 1의 개수를 k라고 했을 때, n보다 작은 자연수 중에서 이진법으로 변환하여 1의 개수가 k인 수가 몇 개 있는지를 return 하도록 solution 함수를 완성해 주세요.

function solution(n) {
  let answer = 0;

  const countOne = (number) =>
    Array.from(number.toString(2)).filter((v) => v === "1").length;

  const ones = countOne(n);

  // for (let i = 1; i < n; i++) {
  //   countOne(i) === ones && answer++;
  // }

  answer = Array.from({ length: n }, (_, i) => (i + 1).toString(2)).filter(
    (v) => countOne(v) === ones
  );

  return answer;
}

console.log(solution(9));
