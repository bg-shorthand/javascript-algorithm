// 수박수박수박수박수박수?

// 문제 설명
// 길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 수박수박을 리턴하고 3이라면 수박수를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.

function solution(n) {
  var answer = '';
  
  if (n === 1) {
      answer = '수'
  } else if (n % 2 === 0) {
      for (var i = 0; i < n / 2; i++) {
          answer += '수박';
      }
  } else if (n % 2 === 1) {
      for (var i = 0; i < (n - 1) / 2; i++) {
          answer += '수박';
      }
      answer += '수';
  }
  return answer;
}