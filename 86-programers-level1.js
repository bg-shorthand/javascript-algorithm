// 최대공약수와 최소공배수

// 문제 설명
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// 제한 사항
// 두 수는 1이상 1000000이하의 자연수입니다.

function solution(n, m) {
  let answer = [];

  // 최대공약수
  const aliquot = number => {
    const res = [];
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        res.push(i);
      }
    }
    return res;
  };

  const GCD = (n, m) => {
    const arr = aliquot(n).filter(v => aliquot(m).includes(v));
    return arr.reduce((acc, cur) => {
      acc = acc > cur ? acc : acc < cur ? cur : acc;
      return acc;
    }, 0);
  };

  answer.push(GCD(n, m));

  // 최소공배수
  const LCM = (n, m) => {
    let nX = n;
    let mX = m;

    while (nX < mX) {
      nX += n;

      if (nX > mX) {
        mX += m;
      }
    }

    return nX;
  };

  if (n < m) {
    answer.push(LCM(n, m));
  } else if (n > m) {
    answer.push(LCM(m, n));
  }

  return answer;
}

console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1, 10]
