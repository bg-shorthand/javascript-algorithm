// 아기 돼지 삼형제

const solution = (array) => {
  if (array.length < 3) return 0;

  const oneDish = array.reduce((acc, cur) => acc + cur, 0) / 3;
  if (oneDish % 1) return 0;

  let count = 0;

  let first = [];
  let second = [];
  let third = [];

  for (let i = 1; i <= array.length - 2; i++) {
    first = array.slice(0, i);
    if (first.reduce((acc, cur) => acc + cur, 0) !== oneDish) continue;
    for (let j = i + 1; j <= array.length - 1; j++) {
      second = array.slice(i, j);
      if (second.reduce((acc, cur) => acc + cur, 0) !== oneDish) continue;
      third = array.slice(j, array.length);
      if (third.reduce((acc, cur) => acc + cur, 0) === oneDish) count++;
    }
  }

  return count;
};

console.log(solution([1, 0, -1, 1, 2, 3, 0, 0, 3, -3, 0, 1, 2]));
console.log(solution([1, 2, 3, 0, 3]));
console.log(solution([1, 2, 3, 0, 3, 3]));
console.log(solution([4, 1]));
