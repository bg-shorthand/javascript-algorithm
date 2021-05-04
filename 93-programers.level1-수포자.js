// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

function solution (answers) {
  const answer = [];

  const answer1 = [];
  for (let i = 0; i < Math.floor(answers.length / 5) + 1; i++) {
    answer1.push(...[1, 2, 3, 4, 5]);
  }
  answer1.length = answers.length;
  const answer2 = [];
  for (let i = 0; i < Math.floor(answers.length / 8) + 1; i++) {
    answer2.push(...[2, 1, 2, 3, 2, 4, 2, 5]);
  }
  answer2.length = answers.length;
  const answer3 = [];
  for (let i = 0; i < Math.floor(answers.length / 10) + 1; i++) {
    answer3.push(...[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);
  }
  answer3.length = answers.length;

  const score1 = [1, 0];
  const score2 = [2, 0];
  const score3 = [3, 0];

  answers.forEach((v, i) => {
    if (answer1[i] === v) score1[1]++;
    if (answer2[i] === v) score2[1]++;
    if (answer3[i] === v) score3[1]++;
  });

  const ranking = [score1, score2, score3].sort((a, b) => b[1] - a[1]);
  answer.push(ranking[0][0]);
  if (ranking[0][1] === ranking[1][1]) {
    answer.push(ranking[1][0]);
    if (ranking[1][1] === ranking[2][1]) {
      answer.push(ranking[2][0]);
    }
  }

  return answer;
}

console.log(solution([1,2,3,4,5]));