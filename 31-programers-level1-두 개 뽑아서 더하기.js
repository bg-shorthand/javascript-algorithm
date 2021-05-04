// 두 개 뽑아서 더하기

// 문제 설명
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length - 1; i++) {
      for (let j = i + 1; j < numbers.length; j ++) {
          answer.push(numbers[i] + numbers[j]);
      }
  }
  let a = 0;
  for (let i = 0; i < answer.length; i++) {
      for (let j = 0; j < answer.length; j++) {
          if (answer[i] < answer[j]) {
              a = answer[i];
              answer[i] = answer[j];
              answer[j] = a;
          }
      }
  }
  for (let i = 0; i < answer.length - 1; i++) {
      if (answer[i] === answer[i + 1]) {
          answer.splice(i, 1);
          --i;
      }
  }
  return answer;
}