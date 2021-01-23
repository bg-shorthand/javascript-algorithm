function solution(m, v) {
  let answer = 0;
  let floor = [[0, 4]];

  const check = w => {
    let i = 1;
    while (i <= floor.length) {
      if ((floor[floor.length - i][1]) < w) {
        floor.push([w, m - w]);
        break;
      } else {
        if (floor[floor.length - i - 1] === undefined) {
          floor[floor.length - i] = [floor[floor.length - i][0] + w, floor[floor.length - i][1] - w];
          break;
        } else {
          i++;
        }
      }
    }
  };

  v.forEach(v => check(v));
  answer = floor.length;
  return answer;
}

console.log(solution(4, [3,2,3,1]));