// g-index는 연구자의 연구 업적을 평가하는 지표의 하나입니다. 어떤 연구자가 발표한 논문의 개수가 N일 때 g-index는 다음과 같습니다.

// g-index : N개의 논문 중 상위 g개의 논문의 인용 횟수의 합이 g2 이상이 되도록 하는 g 값 중에서 최댓값
// 어떤 연구자가 발표한 N개의 논문의 각각의 인용 횟수 K가 담긴 배열이 매개변수 paper로 주어질 때, 이 연구자의 g-index를 return 하도록 solution 함수를 완성해 주세요.

function solution(paper) {
  let answer = 0;
  let temp = 0;
  const sortedPaper = paper.sort((a, b) => b - a);

  for (let i = 1; i <= sortedPaper.length; i++) {
    temp += sortedPaper[i - 1];
    if (temp < i * i) {
      answer = --i;
    } else if (i === sortedPaper.length) {
      answer = i;
    }
  }

  return answer;
}

console.log(solution([1, 0, 0, 3, 0, 1]));
console.log(solution([7, 5, 8, 10, 6, 9, 5]));
console.log(solution([3, 0, 3, 0, 3, 0]));
