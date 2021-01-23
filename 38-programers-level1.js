// 소수 찾기

// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.

function solution (n) {
  let answer = 0;

  function judge (num) {
    let res = true;
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) count++;
      if (count > 2 || num === 1) res = false;
    }
    return res;
  }

  let array = Array.from({ length: n }, (_, i) => i + 1);

  // answer = array.filter((cur, index, arr) => {
  //   if (judge(cur)) {
  //     array = arr.filter(v => v === cur && v % cur !== 0);
  //   }
  // })

  array.reduce((acc, cur, index, arr) => {
    if (judge(cur)) {
      console.log(acc);
      console.log(array);
      acc = arr.filter(v => v === cur || v % cur !== 0);
    }
    console.log(acc);
    return acc;
  }, []);

  return answer;
}

console.log(solution(4));