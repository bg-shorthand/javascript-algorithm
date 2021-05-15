function solution(n) {
  let answer = [1];
  let count = 1;
  let fillFourNum = 3;
  let threeN = 3;

  if (fillFourNum > n) {
    return n === 1 ? "1" : n === 2 ? "2" : "4";
  }

  const up = (index) => {
    if (answer[index] === 1) answer[index] = 2;
    else if (answer[index] === 2) answer[index] = 4;
    else if (answer[index] === 4) {
      answer[index] = 1;
      answer[index - 1] ? up(index - 1) : answer.unshift(1);
    }
  };

  const jump = (init) => {
    while (fillFourNum <= n) {
      answer = Array.from({ length: count }, () => 4);
      count++;
      init *= 3;
      fillFourNum += threeN;
    }
  };

  fillFourNum -= threeN;

  // 여기까지 해서 answer가 4444이면,
  // 실제 답은 4444~44442 사이. 11111 ~ 44442
  // 이 사이를 구분하려면?
  // 11111
  // 22222

  for (let i = 1; i <= n - fillFourNum; i++) {
    up(answer.length - 1);
  }

  return answer.join("");
}

console.log(solution(40));
