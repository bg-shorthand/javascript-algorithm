// 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  let answer = [];

  const initialCheck = lottos.map((num, index) => {
    if (num) {
      return win_nums.includes(num);
    } else {
      return num;
    }
  });

  const high = initialCheck
    .map((num) => (num === 0 ? true : num))
    .filter((bool) => bool).length;
  const low = initialCheck
    .map((num) => (num === 0 ? false : num))
    .filter((bool) => bool).length;

  answer = [high, low].map((num) => {
    switch (num) {
      case 0:
        return 6;
      case 1:
        return 6;
      case 2:
        return 5;
      case 3:
        return 4;
      case 4:
        return 3;
      case 5:
        return 2;
      default:
        return 1;
    }
  });

  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
